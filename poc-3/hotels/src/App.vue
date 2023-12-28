<template>
  <div>
    <Home />
    <Footer />
  </div>
</template>

<script>
// Import the section4Vue component
import Home from './webpages/homePage/components/home.vue';
import Footer from './webpages/footer/components/footerMain.vue'

export default {
  components: {
    Home,
    Footer
  },
};
</script>

<style>
/* Add your component-specific styles here */
</style>