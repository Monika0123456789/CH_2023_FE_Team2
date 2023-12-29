<template>
  <div>
    <HotelList/>
  </div>
</template>
<script>
import HotelList from './hotelListCard.vue'
export default {
  components: {
    HotelList,
  },
  methods: {
  openHotelDetails(item) {
    // Navigate to the "hoteldetails" page with the hotelId parameter
    this.$router.push({ name: 'hoteldetails', params: { hotelId: item.id } });
  },
}
};
</script>
<style></style>
