<template>
  <section class="section-about">
    <h5>About This Hotel</h5>
    <h1>Main Highlights</h1>
    <div class="icons">
      <div class="image-box" v-for="(icon, index) in icons" :key="index">
        <font-awesome-icon :icon="['fas', icon]" style="font-size: 25px;" />
      </div>
    </div>
    <p>{{ mainHighlightsText }}</p>
    <p>{{ otherText }}</p>
    <h1>Advantages</h1>
    <div class="advantages" v-for="(advantage, index) in advantages" :key="index">
      <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;"/>
      {{ advantage }}
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      icons: ['wifi','water-ladder', 'snowflake', 'bell'],
      mainHighlightsText: "Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bad one supposing breakfast day fulfilled off depending questions",
      otherText: "Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed fally right aware if oh truth. Large above be means. Dashwood does provide stronger is.",
      advantages: [
        "Every hotel staff to have Proper PPT kit for COVID-19",
        "Every staff member wears face masks and gloves at all service times.",
        "Hotel staff ensures to maintain social distancing at all times.",
        "The hotel has in-Room Dining options available."
      ]
    };
  }
};
</script>
<style src="../hotelDetails-styles/section-2.css" scoped></style>
