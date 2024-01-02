<template>
  <div>
    <div
      style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);"
    >
      <h2 style="margin-top: 0">Customer Rating</h2>
      <div style="display: flex">
        <RatingBox
          v-for="rating in [3, 3.5, 4, 4.5]"
          :key="rating"
          :value="rating"
          @click="handleRatingClick(rating)"
          :is-selected="selectedRating === rating"
        />
      </div>
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
      // Toggle the rating if clicked again
      const newRating = this.selectedRating === rating ? null : rating;

      // Update the state
      this.selectedRating = newRating;

      // Notify the parent component about the selected rating
      this.$emit('rating-change', newRating);
    },
  },
  components: {
    RatingBox: {
      props: {
        value: Number,
        isSelected: Boolean,
      },
      methods: {
        handleClick() {
          // Emit a custom event to notify the parent component about the click
          this.$emit('click', this.value);
        },
      },
      template: `
        <div
          @click="handleClick"
          :style="{
            textAlign: 'center',
            margin: '5px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'content-box',
            backgroundColor: isSelected ? '#ccc' : 'white',
            cursor: 'pointer',
          }"
        >
          <p style="margin: 0; line-height: 20px; font-size: 16px; color: black">{{ value }}</p>
        </div>
      `,
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
