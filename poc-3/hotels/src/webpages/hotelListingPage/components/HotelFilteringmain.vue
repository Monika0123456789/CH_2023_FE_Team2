<!-- Include the CustomerRating component and pass the selected rating to your filteredHotels computed property -->
<template>
  <div>
    <!-- Other existing components and code -->
    <HotelTypeComponent :hotels="hotels" :selectedTypes="selectedTypes" @typeChange="handleTypeChange" />
    <PriceRangeFilter @price-range-updated="handlePriceRangeChange" />
    <CustomerRating @ratingChange="handleRatingChange" /><!-- Include the component and listen to the 'ratingChange' event -->
    <AmenitiesFilter :hotels="filteredHotels" :selectedAmenities="selectedAmenities" @amenitiesChange="handleAmenitiesChange" />
    
    <div v-for="hotel in filteredHotels" :key="hotel.id">
      <p>{{ hotel.name }} - {{ hotel.location }} - {{ hotel.price }}</p>
    </div>
  </div>
</template>

<script>
import HotelTypeComponent from './HotelTypeComponent.vue';
import AmenitiesFilter from './ammenitiesComponent.vue'; // Assuming the correct import name
import PriceRangeFilter from './PriceRangeFilter.vue';
import CustomerRating from './CustomerRatingComponent.vue';
import hotelData from '../../../../public/assets/json/hotel-booking.json';

export default {
  components: {
    HotelTypeComponent,
    AmenitiesFilter,
    PriceRangeFilter,
    CustomerRating,
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
      selectedRating: null, // New property to store the selected rating
    };
  },
  computed: {
    filteredHotels() {
      let filtered = this.hotels;

      // Apply existing filters
      if (this.selectedTypes.length > 0) {
        filtered = filtered.filter((hotel) => this.selectedTypes.includes(hotel.type));
      }

      if (this.selectedAmenities.length > 0) {
        filtered = filtered.filter((hotel) =>
          this.selectedAmenities.every((amenity) => hotel.Facilities.includes(amenity))
        );
      }

      filtered = filtered.filter((hotel) => hotel.price >= this.priceRange.min && hotel.price <= this.priceRange.max);

      // Apply the new rating filter
      if (this.selectedRating !== null) {
        filtered = filtered.filter((hotel) => hotel.rating === this.selectedRating);
      }

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
    handlePriceRangeChange(priceRange) {
      this.priceRange = priceRange;
    },
    handleRatingChange(selectedRating) {
      this.selectedRating = selectedRating; // Update the selected rating when received from the CustomerRating component
    },
  },
};
</script>
