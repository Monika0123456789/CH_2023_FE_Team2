<template>
  <div class="customer-rating" style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Rating star</h2>
    <div style="display: flex;">
      <div v-for="rating in [3, 3.5, 4, 4.5]" :key="rating" @click="handleRatingClick(rating)" :style="getRatingStyle(rating)">
        <!-- Include the star icon here using inline SVG -->
        <p style="margin: 0; line-height: 20px; font-size: 16px; color: black; display: flex; ">{{ rating }} <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" height="24" viewBox="0 0 24 24" width="24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2l2.4 6.6h6.6l-5.4 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-5.4-4.8h6.6z"/>
</svg></p>
        
      </div>
    </div>
    <div v-if="selectedRating !== null">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingStarComp',
  data() {
    return {
      selectedRating: null,
    };
  },
  methods: {
    handleRatingClick(rating) {
      const newRating = this.selectedRating === rating ? null : rating;
      this.selectedRating = newRating;
      this.$emit('ratingChange', newRating);
    },
    getRatingStyle(value) {
      return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1%',
        padding: '5%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'content-box',
        backgroundColor: this.selectedRating === value ? '#ccc' : 'white',
        cursor: 'pointer',
      };
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
