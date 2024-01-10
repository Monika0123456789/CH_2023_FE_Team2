<template>
  <div class="container">
    <SectionOneComp/>
    <section2Comp/>
    <Section3/>
    <section4Vue />
  </div>
</template>
<script>
  import SectionOneComp from './section-1.vue';
  import Section3 from './featuredhotel.vue';
  import section2Comp from "../components/section2.vue";
  import section4Vue from './section4.vue';
  export default {
    components: {
      SectionOneComp,
      Section3,
      section2Comp,
      section4Vue,
    },
  };
</script>
<style></style>
