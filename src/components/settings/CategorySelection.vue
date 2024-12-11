<template>
  <div class="category-selection">
    <h2>Select Your Idea Categories</h2>
    <div class="categories-list">
      <label 
        v-for="category in categories" 
        :key="category.id"
        class="category-item"
      >
        <input
          type="checkbox"
          :checked="isSelected(category.id)"
          @change="() => toggleCategory(category.id)"
        />
        <span>{{ category.name }}</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { CATEGORIES } from '../../constants/categories';

export default defineComponent({
  setup() {
    const store = useStore();
    
    const isSelected = (categoryId: string) => {
      return store.state.settings.selectedDatabases.includes(categoryId);
    };

    const toggleCategory = (categoryId: string) => {
      store.dispatch('toggleCategory', categoryId);
    };

    return {
      categories: CATEGORIES,
      isSelected,
      toggleCategory
    };
  }
});
</script>

<style lang="scss" scoped>
.category-selection {
  margin: 20px 0;

  h2 {
    color: var(--primary-color);
    font-size: 24px;
    margin-bottom: 20px;
  }
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }

  span {
    color: var(--text-color);
  }
}
</style>