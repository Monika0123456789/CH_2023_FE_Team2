<template>
  <div>
    <SectionOne/>
  <SectionAbout/>
  <SectionAmenities/>
  </div>
</template>
<script>
  import SectionAbout from './section-2.vue';
  import SectionAmenities from './section-3.vue';
  import SectionOne from './section-1.vue';
  export default {
    components: {
      SectionOne,
      SectionAbout,
      SectionAmenities
    },
  };
</script>
<style></style>

