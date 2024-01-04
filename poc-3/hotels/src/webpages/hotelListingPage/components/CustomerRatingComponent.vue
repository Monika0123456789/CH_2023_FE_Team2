
<template>
  <div class="customer-rating" style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Customer Rating</h2>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div v-for="rating in [3, 3.5, 4, 4.5]" :key="rating" @click="handleRatingClick(rating)" :style="getRatingStyle(rating)">
        <p style="margin: 0; line-height: 20px; font-size: 100%; color: black; display: flex;">{{ rating }} <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(245, 217, 34)" height="1.5em" viewBox="0 0 24 24" width="1.5em">
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
</style>
