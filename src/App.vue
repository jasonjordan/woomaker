<template>
  <div class="app">
    <header class="header">
      <h1>Woo</h1>
    </header>
    <main class="container">
      <div class="settings-panel">
        <CategorySelection />
        <NotificationFrequency />
        <p class="description">
          You will receive random notifications throughout the day with new ideas to surprise your partner.
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategorySelection from './components/settings/CategorySelection.vue';
import NotificationFrequency from './components/settings/NotificationFrequency.vue';

export default defineComponent({
  components: {
    CategorySelection,
    NotificationFrequency
  }
});
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}

.header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;

  h1 {
    margin: 0;
  }
}

.settings-panel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.description {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 20px;
}
</style>