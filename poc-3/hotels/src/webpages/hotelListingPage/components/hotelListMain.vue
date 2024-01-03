<template>

  <div class = "listMain container">
    <HotelFilteringMain class="filters" />
    <HotelList class="hotelLists"/>
  </div>
</template>
<script>
import HotelList from './hotelListCard.vue'
import HotelFilteringMain from './HotelFilteringmain.vue';
export default {
  components: {
    HotelList,
    HotelFilteringMain, 
  },
  methods: {
  openHotelDetails(item) {
    // Navigate to the "hoteldetails" page with the hotelId parameter
    this.$router.push({ name: 'hoteldetails', params: { hotelId: Number(item.id) } });
  },
}
};
</script>
<style scoped>
.listMain{
  display: flex;
  gap: 2%;
}
.filters{
  width: 28%;
}
.hotelLists{
  width: 70%;
}
</style>

