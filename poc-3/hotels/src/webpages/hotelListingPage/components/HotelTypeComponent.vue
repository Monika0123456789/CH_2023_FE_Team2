<template>
  <div class="hotel-type-filter">
    <h2>Hotel Type</h2>
    <div v-for="type in types" :key="type">
      <label>
        <input
          type="checkbox"
          :value="type"
          v-model="selectedTypes"
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
  props: {
    value: Array, // v-model binding
  },
  data() {
    return {
      types: ['All', 'Hotel', 'Apartment', 'Resort', 'Villa'],
    };
  },
  computed: {
    selectedTypes: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style scoped>
.hotel-type-filter {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.hotel-type-filter h2 {
  margin-top: 0;
}
</style>
