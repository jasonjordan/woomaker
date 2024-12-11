<template>
  <div class="notification-frequency">
    <h2>Ideas per day:</h2>
    <div class="slider-container">
      <input
        type="range"
        v-model="notificationsPerDay"
        :min="config.MIN_NOTIFICATIONS_PER_DAY"
        :max="config.MAX_NOTIFICATIONS_PER_DAY"
        class="slider"
        @input="updateNotifications"
      />
      <span class="value-label">{{ notificationsPerDay }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { CONFIG } from '../../constants/config';

export default defineComponent({
  setup() {
    const store = useStore();
    const notificationsPerDay = computed({
      get: () => store.state.settings.notificationsPerDay,
      set: (value) => updateNotifications(Number(value))
    });

    const updateNotifications = (value: number) => {
      store.dispatch('updateNotificationSettings', {
        notificationsPerDay: value
      });
    };

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
  margin: 20px 0;

  h2 {
    color: var(--primary-color);
    font-size: 24px;
    margin-bottom: 20px;
  }
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.slider {
  flex: 1;
  -webkit-appearance: none;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: darken(#FF0000, 10%);
    }
  }
}

.value-label {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
  min-width: 30px;
  text-align: center;
}
</style>