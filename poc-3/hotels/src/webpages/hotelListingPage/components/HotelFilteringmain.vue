<template>
  <div>
    <HotelTypeComponent
      :hotels="hotels"
      :selectedTypes="selectedTypes"
      @typeChange="handleTypeChange"
    />
    <PriceRangeFilter 
      :min="priceRange.min"
      :max="priceRange.max"
      @price-range-updated="handlePriceRangeChange" 
    />
    <PopularTypeComponent/>
    <CustomerRating @ratingChange="handleRatingChange" />
    <RatingStarComp/>
    <AmenitiesFilter
      ref="amenitiesFilterRef"
      :hotels="hotels"
      :selectedAmenities="selectedAmenities"
      @amenitiesChange="handleAmenitiesChange"
    />
    <BottomButton @clearAllFilters="handleClearAllFilters" />

    
        <div v-for="hotel in filteredHotels" :key="hotel.id">
          <!-- Render your hotel content here -->
        </div>
    
  </div>
</template>

<script>
import HotelTypeComponent from "./HotelTypeComponent.vue";
import AmenitiesFilter from "./ammenitiesComponent.vue";
import PriceRangeFilter from "./PriceRangeFilter.vue";
import CustomerRating from "./CustomerRatingComponent.vue";
import BottomButton from "./BottombuttomComponent.vue";
import RatingStarComp from "./RatingStarComponent.vue";
import PopularTypeComponent from "./PopularTypeComponent.vue";
import hotelData from "../../../../public/assets/json/hotel-booking.json";
import { filteredHotel } from "../js/filteredHotelId.js";

export default {
  components: {
    HotelTypeComponent,
    AmenitiesFilter,
    PriceRangeFilter,
    CustomerRating,
    BottomButton,
    RatingStarComp,
    PopularTypeComponent
  },
  data() {
    return {
      hotels: hotelData.items || [],
      selectedTypes: [],
      selectedAmenities: [],
      priceRange: {
        min: 200,
        max: 1000,
      },
      selectedRating: null,
    };
  },
  computed: {
    filteredHotels() {
      let filtered = this.hotels;

      if (this.selectedTypes.length > 0) {
        filtered = filtered.filter((hotel) =>
          this.selectedTypes.includes(hotel.type)
        );
      }

      if (this.selectedAmenities.length > 0) {
        filtered = filtered.filter((hotel) =>
          this.selectedAmenities.every((amenity) =>
            hotel.Facilities.includes(amenity)
          )
        );
      }

      filtered = filtered.filter(
        (hotel) =>
          hotel.price >= this.priceRange.min &&
          hotel.price <= this.priceRange.max
      );

      if (this.selectedRating !== null) {
        filtered = filtered.filter(
          (hotel) => hotel.rating === this.selectedRating
        );
      }

      const hotelIds = filtered.map((hotel) => hotel.id);

      this.addHotelId(hotelIds);

      return filtered;
    },
  },
  methods: {
    handleTypeChange(selectedTypes) {
      this.selectedTypes = selectedTypes;
    },
    handleAmenitiesChange(selectedAmenities) {
      this.selectedAmenities = selectedAmenities;
    },
    handlePriceRangeChange(updatedRange) {
      this.priceRange.min = updatedRange.min;
      this.priceRange.max = updatedRange.max;
    },
    handleClearAllFilters() {
      // Clear all filters and checkboxes
      this.selectedTypes = [];
      this.selectedAmenities = [];
      this.priceRange = {
        min: 200,
        max: 1000,
      };
      this.selectedRating = null;

      
      this.$refs.amenitiesFilterRef.clearAllCheckboxes();
      
    },
    handleRatingChange(selectedRating) {
      this.selectedRating = selectedRating;
    },
    addHotelId(ids) {
      filteredHotel.filteredId = ids;
    },
  },
};
</script>
