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
    this.$router.push({ name: 'hoteldetails', params: { hotelId: item.id } });
  },
}
};
</script>
<style scoped>
.listMain{
  display: flex;
  gap: 2%;
  box-sizing: border-box;
}
.filters{
  width: 25%;
}
.hotelLists{
  width: 73%;
}
@media screen and (max-width : 760px) {
  .listMain{
    flex-direction: column;
  }
  .hotelLists{
    width: 100%;
  }
  
}
</style>

