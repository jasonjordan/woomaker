`<template>
  <ScrollView>
    <StackLayout class="p-4">
      <Label text="Notification Settings" class="h2 mb-4" />
      
      <Label text="Ideas per day:" class="label" />
      <Slider
        v-model="notificationsPerDay"
        :minValue="1"
        :maxValue="5"
        :value="notificationsPerDay"
        @valueChange="updateNotifications"
        class="slider"
      />
      <Label :text="notificationsPerDay.toString()" class="value-label" />
      
      <Label text="You will receive random notifications throughout the day with new ideas to surprise your partner." 
             textWrap="true" 
             class="description" />
    </StackLayout>
  </ScrollView>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const notificationsPerDay = ref(store.state.settings.notificationsPerDay);

    const updateNotifications = () => {
      store.dispatch('updateNotificationSettings', {
        notificationsPerDay: notificationsPerDay.value
      });
    };

    onMounted(() => {
      notificationsPerDay.value = store.state.settings.notificationsPerDay;
    });

    return {
      notificationsPerDay,
      updateNotifications
    };
  }
});
</script>

<style lang="scss" scoped>
.h2 {
  color: #FF0000;
  font-size: 24;
  font-weight: bold;
}

.label {
  margin-top: 20;
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

.description {
  margin-top: 20;
  color: #666;
  font-size: 14;
  text-align: center;
}
</style>`