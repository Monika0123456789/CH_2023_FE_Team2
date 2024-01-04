<template>
  <div class="container">
  <SectionOne  :hotelId="Number(hotelId)"/>
  <SectionAbout/>
  <SectionAmenities/>
  <SectionRoomOptions :hotelId="Number(hotelId)"/>
  <SectionFive/>
  </div>
</template>
<script>
  import SectionAbout from './section-2.vue';
  import SectionAmenities from './section-3.vue';
  import SectionOne from './section-1.vue';
  import SectionRoomOptions from './section-4.vue';
  import SectionFive from './section-5.vue'
  export default {
    components: {
      SectionOne,
      SectionAbout,
      SectionAmenities,
      SectionRoomOptions,
      SectionFive 
    },
    props: {
    hotelId: { type: Number, required: true },
  }
  };
</script>
<style></style>

