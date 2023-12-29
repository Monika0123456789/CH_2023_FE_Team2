<template>
  <div>
    <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);">
      <h1>Popular Type</h1>
      <div>
        <label>
          <input type="checkbox" v-model="freeBreakfastIncluded" />
          Free Breakfast Included
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="payAtHotelAvailable" />
          Pay At Hotel Available
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="freeCancellationAvailable" />
          Free Cancellation Available
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularType',
  data() {
    return {
      freeBreakfastIncluded: false,
      payAtHotelAvailable: false,
      freeCancellationAvailable: false,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
