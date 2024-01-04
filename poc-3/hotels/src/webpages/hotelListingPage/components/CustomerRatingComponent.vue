
<template>
  <div class="customer-rating" style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Customer Rating</h2>
    <div style="display: flex;">
     
      <div v-for="rating in [3, 3.5, 4, 4.5]" :key="rating" @click="handleRatingClick(rating)" :style="getRatingStyle(rating)">
        <p style="margin: 0; line-height: 20px; font-size: 16px; color: black;">{{ rating }}</p>
      </div>
    </div>
    <div v-if="selectedRating !== null">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerRating',
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
        textAlign: 'center',
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
