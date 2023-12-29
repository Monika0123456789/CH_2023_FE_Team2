<template>
  <div>
    
    <div class="rating-container">
      <h2 class="rating-heading">Rating Star</h2>
      <div class="rating-boxes">
        <RatingBox rating="3" />
        <RatingBox rating="3.5" />
        <RatingBox rating="4" />
        <RatingBox rating="4.5" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'RatingStar',
  components: {
    RatingBox: {
      props: {
        rating: String,
      },
      template: `
        <div class="rating-box">
          <p class="rating-value">{{ rating }}<font-awesome-icon icon="star" /></p>
        </div>
      `,
      components: {
        FontAwesomeIcon,
      },
    },
  },
};
</script>

<style scoped>
.rating-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.rating-heading {
  margin-top: 0;
}

.rating-boxes {
  display: flex;
}

.rating-box {
  text-align: center;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #ccc;
}

.rating-value {
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  color: black;
}
</style>
