`<template>
  <StackLayout class="category-selection">
    <Label text="Select Your Idea Categories" class="h2" />
    <CategoryList
      :selectedCategories="selectedCategories"
      @update="handleCategoryUpdate"
    />
  </StackLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import CategoryList from './CategoryList.vue';

export default defineComponent({
  components: {
    CategoryList
  },
  setup() {
    const store = useStore();
    
    const selectedCategories = computed(() => store.state.settings.selectedDatabases);

    const handleCategoryUpdate = (categoryId: string) => {
      store.dispatch('toggleCategory', categoryId);
    };

    return {
      selectedCategories,
      handleCategoryUpdate
    };
  }
});
</script>

<style lang="scss" scoped>
.category-selection {
  margin: 20 0;
}

.h2 {
  color: #FF0000;
  font-size: 24;
  font-weight: bold;
  margin-bottom: 20;
}
</style>`