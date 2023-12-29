<template>
    <div class="mainfilter">
      <HotelTypeComponent />
      <PriceRangeFilter/>
      <PopularType/>
      <CustomerRating/>
      <RatingStar/>
      <Ammenities/>
      <BottomButton/>
    </div>
  </template>
  
  <script>
 
  import HotelTypeComponent from './HotelTypeComponent.vue';
  import PriceRangeFilter from './PriceRangeFilter.vue';
  import CustomerRating from './CustomerRatingComponent.vue';
  import PopularType from './PopularTypeComponent.vue';
  import RatingStar from './RatingStarComponent.vue';
  import Ammenities from './ammenitiesComponent.vue';
  import BottomButton from './BottombuttomComponent.vue';
  
  export default {
    name: 'HotelFilteringMain',
    components: {
      HotelTypeComponent,
      PriceRangeFilter,
      CustomerRating,
      PopularType,
      RatingStar,
      Ammenities,
      BottomButton,
    },
  }
  </script>
  
  <style scoped>

  </style>
  