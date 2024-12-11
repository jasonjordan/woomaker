`<template>
  <StackLayout class="category-item">
    <CheckBox
      :text="category.name"
      :checked="isSelected"
      @checkedChange="onToggle"
      class="checkbox"
    />
  </StackLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';
import type { Category } from '../../types';

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const onToggle = () => {
      emit('toggle', props.category.id);
    };

    return {
      onToggle
    };
  }
});
</script>

<style lang="scss" scoped>
.category-item {
  margin: 10 0;
}

.checkbox {
  color: #333;
  font-size: 16;
}
</style>`