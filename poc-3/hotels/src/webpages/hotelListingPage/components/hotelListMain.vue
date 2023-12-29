<template>

  <div class = "listMain">
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

