`<template>
  <StackLayout class="categories-list">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :isSelected="isSelected(category.id)"
      @toggle="toggleCategory"
    />
  </StackLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CATEGORIES } from '../../constants/categories';
import CategoryItem from './CategoryItem.vue';

export default defineComponent({
  components: {
    CategoryItem
  },
  props: {
    selectedCategories: {
      type: Array as () => string[],
      required: true
    }
  },
  emits: ['update'],
  setup(props, { emit }) {
    const isSelected = (categoryId: string) => {
      return props.selectedCategories.includes(categoryId);
    };

    const toggleCategory = (categoryId: string) => {
      emit('update', categoryId);
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
.categories-list {
  margin: 10 0;
}
</style>`