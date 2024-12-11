`<template>
  <StackLayout class="notification-frequency">
    <Label text="Ideas per day:" class="label" />
    <Slider
      v-model="notificationsPerDay"
      :minValue="config.MIN_NOTIFICATIONS_PER_DAY"
      :maxValue="config.MAX_NOTIFICATIONS_PER_DAY"
      :value="notificationsPerDay"
      @valueChange="updateNotifications"
      class="slider"
    />
    <Label :text="notificationsPerDay.toString()" class="value-label" />
  </StackLayout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { CONFIG } from '../../constants/config';
import { sanitizeNumber } from '../../utils/sanitize';

export default defineComponent({
  setup() {
    const store = useStore();
    const notificationsPerDay = ref(store.state.settings.notificationsPerDay);

    const updateNotifications = () => {
      const sanitizedValue = sanitizeNumber(notificationsPerDay.value);
      if (sanitizedValue !== notificationsPerDay.value) {
        notificationsPerDay.value = sanitizedValue;
      }
      store.dispatch('updateNotificationSettings', {
        notificationsPerDay: sanitizedValue
      });
    };

    onMounted(() => {
      notificationsPerDay.value = sanitizeNumber(store.state.settings.notificationsPerDay);
    });

    return {
      config: CONFIG,
      notificationsPerDay,
      updateNotifications
    };
  }
});
</script>

<style lang="scss" scoped>
.notification-frequency {
  margin: 20 0;
}

.label {
  margin-bottom: 10;
  color: #333;
  font-size: 18;
}

.value-label {
  text-align: center;
  color: #FF0000;
  font-size: 20;
  font-weight: bold;
  margin-top: 10;
}

.slider {
  margin: 10 0;
}
</style>`