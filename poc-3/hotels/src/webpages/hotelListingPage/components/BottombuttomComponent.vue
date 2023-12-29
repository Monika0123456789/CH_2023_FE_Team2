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
        // Implement the logic to clear all filters
        // You can call the appropriate method or emit an event to notify the parent component
        // For now, this method is left empty as it depends on your specific implementation.
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  