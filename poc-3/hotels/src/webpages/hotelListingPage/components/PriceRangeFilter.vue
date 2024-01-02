<template>
  <div>
 

    <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
      <h2 style="margin-top: 0;">Price Range</h2>

      <input type="range" v-model="priceRange" :min="min" :max="max" @input="handlePriceChange">

      <div>
        <p>Selected Price: {{ formatPrice(priceRange) }}</p>
        <h3>{{ formatPrice(priceRange) }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceRangeFilter',
  data() {
    return {
      min: 200,
      max: 1000,
      priceRange: 200,
    };
  },
  methods: {
    formatPrice(value) {
      return `$${value}`;
    },
    handlePriceChange() {
      // Handle any additional logic needed when the price input range changes
      // In this example, we're updating the h3 tag with the selected price
      const h3Element = document.querySelector('h3');
      if (h3Element) {
        h3Element.textContent = this.formatPrice(this.priceRange);
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
