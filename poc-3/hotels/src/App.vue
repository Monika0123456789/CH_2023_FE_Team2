<template>
  <div id="app">
    <h1>Hello</h1>
    <HotelListMain />
  </div>
</template>

<script>

import HotelListMain from './webpages/hotelListingPage/components/hotelListMain.vue';

export default {
  name: 'App',
  components: {
    HotelListMain, 
  },
}
</script>

<style>

</style>
