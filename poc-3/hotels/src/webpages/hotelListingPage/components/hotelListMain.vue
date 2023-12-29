<template>
    <div>
      <h1>Hotel List Main Component</h1>
      
      
      <HotelFilteringMain />
      
      
    </div>
  </template>
  
  <script>

  import HotelFilteringMain from './HotelFilteringmain.vue';
  
  export default {
    name: 'HotelListMain',
    components: {
      HotelFilteringMain, 
    },
  }
  </script>
  
  <style scoped>

  </style>
  