<template>
  <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Hotel Type</h2>
    
    <div>
      <label>
        <input
          type="checkbox"
          value="All"
          :checked="selectedTypes.includes('All')"
          @change="handleCheckboxChange('All')"
        />
        All
      </label>
    </div>

    <div v-for="type in ['Hotel', 'Apartment', 'Resort', 'Villa']" :key="type">
      <label>
        <input
          type="checkbox"
          :value="type"
          :checked="selectedTypes.includes(type)"
          @change="handleCheckboxChange(type)"
        />
        {{ type }}
      </label>
    </div>

    <!-- Additional content can be added here -->

  </div>
</template>

<script>
export default {
  name: 'HotelTypeFilter',
  data() {
    return {
      selectedTypes: [],
    };
  },
  methods: {
    handleCheckboxChange(type) {
      this.selectedTypes = this.selectedTypes.includes('All')
        ? type === 'All' ? [] : ['All', ...['Hotel', 'Apartment', 'Resort', 'Villa'].filter(t => t !== type)]
        : type === 'All' ? ['All', ...['Hotel', 'Apartment', 'Resort', 'Villa']] : (this.selectedTypes.includes(type)
          ? this.selectedTypes.filter(selectedType => selectedType !== type)
          : [...this.selectedTypes, type]);
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
