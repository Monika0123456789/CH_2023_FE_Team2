<template>
  <div>
    <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
      <h2 style="margin-top: 0;">Price Range</h2>
      <Slider v-model="priceRange" :range="true" :min="min" :max="max" @input="handlePriceChange" style="width: 100%" />
      <div>
        <p>Selected Price Range: {{ formatPrice(priceRange[0]) }} - {{ formatPrice(priceRange[1]) }}</p>
      </div>

      
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Slider from 'primevue/slider';

export default defineComponent({
  name: 'PriceRangeFilter',
  components: {
    Slider,
  },
  data() {
    return {
      min: 200,
      max: 1000,
      priceRange: [200, 1000],

      minRating: 1,
      maxRating: 5,
      ratingRange: [1, 5],
    };
  },
  watch: {
    priceRange: {
      handler: 'handlePriceChange',
      deep: true,
    },
    ratingRange: {
      handler: 'handleRatingChange',
      deep: true,
    },
  },
  methods: {
    formatPrice(value) {
      return `$${value}`;
    },
    handlePriceChange() {
      this.$emit('price-range-updated', {
        min: this.priceRange[0],
        max: this.priceRange[1],
      });
    },
    
    resetFilter() {
      
      this.priceRange = [this.min, this.max];
      this.handlePriceChange();
    },
  },
});
</script>

<style scoped>
</style>
