`<template>
  <ScrollView>
    <StackLayout class="p-4">
      <Label text="Select Your Idea Categories" class="h2 mb-4" />
      
      <StackLayout class="form">
        <CheckBox 
          v-for="category in categories" 
          :key="category.id"
          :text="category.name"
          :checked="isSelected(category.id)"
          @checkedChange="toggleCategory(category.id)"
          class="checkbox-item"
        />
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    
    const categories = [
      { id: 'romance', name: 'Romance - Sweet & Tender' },
      { id: 'raunch', name: 'Raunch - Spicy & Bold' },
      { id: 'renew', name: 'Renew - Relationship Building' }
    ];

    const isSelected = (categoryId: string) => {
      return store.state.settings.selectedDatabases.includes(categoryId);
    };

    const toggleCategory = (categoryId: string) => {
      const current = [...store.state.settings.selectedDatabases];
      const index = current.indexOf(categoryId);
      
      if (index === -1) {
        current.push(categoryId);
      } else {
        current.splice(index, 1);
      }

      store.dispatch('updateNotificationSettings', {
        selectedDatabases: current
      });
    };

    return {
      categories,
      isSelected,
      toggleCategory
    };
  }
});
</script>

<style lang="scss" scoped>
.form {
  margin: 20;
}

.checkbox-item {
  margin: 10 0;
  color: #333;
}

.h2 {
  color: #FF0000;
  font-size: 24;
  font-weight: bold;
}
</style>`