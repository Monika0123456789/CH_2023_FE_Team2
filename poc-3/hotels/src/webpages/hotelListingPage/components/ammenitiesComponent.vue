<template>
  <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Amenities</h2>
    <div v-for="amenity in visibleAmenities" :key="amenity.value">
      <label>
        <input
          type="checkbox"
          :checked="isSelected(amenity.value)"
          @change="() => handleCheckboxChange(amenity.value)"
        />
        {{ amenity.label }}
      </label>
    </div>
    <div v-if="amenitiesData.length > 5" style="display: flex; align-items: center; cursor: pointer;" @click="toggleShowAll">
      <span>{{ showAll ? 'See less' : 'See more' }}</span>&nbsp;
    </div>
  </div>
</template>

<script>

export default {
  name: 'Amenities',
  
  data() {
    return {
      selectedAmenities: [],
      showAll: false,
      amenitiesData: [
        { value: 'all', label: 'All' },
        { value: 'Air conditioning', label: 'Air conditioning' },
        { value: 'Bar', label: 'Bar' },
        { value: 'Bonfire', label: 'Bonfire' },
        { value: 'Business Services', label: 'Business Services' },
        { value: 'Non-smoking rooms', label: 'Non-smoking rooms' },
        { value: 'Ironing service', label: 'Ironing service' },
        { value: '24-hour front desk', label: '24-hour front desk' },
        { value: 'Caretaker', label: 'Caretaker' },
        { value: 'Concierge service', label: 'Concierge service' },
        { value: 'Laundry', label: 'Laundry' },
        { value: 'Family rooms', label: 'Family rooms' },
        { value: '24-hour security', label: '24-hour security' },
        { value: 'Balcony', label: 'Balcony' },
        { value: 'Free Wifi', label: 'Free Wifi' },
      ],
    };
  },
  computed: {
    visibleAmenities() {
      return this.showAll ? this.amenitiesData : this.amenitiesData.slice(0, 5);
    },
  },
  methods: {
    
    handleCheckboxChange(type) {
      if (type === 'all') {
        const newSelected = this.selectedAmenities.length === this.amenitiesData.length ? [] : this.amenitiesData.map((amenity) => amenity.value);
        this.selectedAmenities = newSelected;
        this.onAmenitiesChange(newSelected);
      } else {
        const newSelected = this.selectedAmenities.includes(type)
          ? this.selectedAmenities.filter((selectedType) => selectedType !== type)
          : [...this.selectedAmenities, type];
        this.selectedAmenities = newSelected;
        this.onAmenitiesChange(newSelected);
      }
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    clearAllCheckboxes() {
    this.selectedAmenities = [];
  },

    onAmenitiesChange(selectedAmenities) {
      this.$emit('amenitiesChange', selectedAmenities);
    },
    isSelected(type) {
      return this.selectedAmenities.includes(type);
    },
  },
};
</script>

<style scoped>

</style>
