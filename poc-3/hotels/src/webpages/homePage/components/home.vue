<template>
  <div>
    <SectionOneComp/>
    <section2Comp/>
    <Section3/>
  </div>
</template>
<script>
  import SectionOneComp from './section-1.vue';
  import Section3 from './featuredhotel.vue';
  import section2Comp from "../components/section2.vue";
  export default {
    components: {
      SectionOneComp,
      Section3,
      section2Comp
    },
  };
</script>
<style></style>

