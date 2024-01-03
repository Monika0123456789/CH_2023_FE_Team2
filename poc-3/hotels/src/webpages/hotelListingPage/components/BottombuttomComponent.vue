<!-- BottomButtonComponent.vue -->

<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <p @click="handleClearAllClick" style="cursor: pointer;">Clear all</p>
      <button style="padding: 10px; line-height: 10px; border-radius: 5px;">Filter Result</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomButton',
  methods: {
    handleClearAllClick() {
      // Reset all filters to their initial state
      this.$emit('clearAllFilters');
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
