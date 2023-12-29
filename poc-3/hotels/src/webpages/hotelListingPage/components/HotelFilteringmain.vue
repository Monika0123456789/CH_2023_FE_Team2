<template>
    <div class="mainfilter">
      <h1>Hotel Filtering Main Component</h1>
      <HotelTypeComponent />
      <PriceRangeFilter/>
      <CustomerRating/>
      <PopularType/>
      <RatingStar/>
      <Ammenities/>
    </div>
  </template>
  
  <script>
 
  import HotelTypeComponent from './HotelTypeComponent.vue';
  import PriceRangeFilter from './PriceRangeFilter.vue';
  import CustomerRating from './CustomerRatingComponent.vue';
  import PopularType from './PopularTypeComponent.vue';
  import RatingStar from './RatingStarComponent.vue';
  import Ammenities from './ammenitiesComponent.vue';
  
  export default {
    name: 'HotelFilteringMain',
    components: {
      HotelTypeComponent,
      PriceRangeFilter,
      CustomerRating,
      PopularType,
      RatingStar,
      Ammenities,
    },
  }
  </script>
  
  <style scoped>
  .mainfilter{
    width: 30%;
  }
  </style>
  