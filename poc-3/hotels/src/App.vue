<template>
 <div id="app">
    <HeaderMain />
    <HomeComp/>
      <Footer />
  </div>
</template>
<script>
import HeaderMain from './webpages/header/components/headerMain.vue';
import  HomeComp from './webpages/homePage/components/home.vue';
import Footer from './webpages/footer/components/footerMain.vue'

export default {
  components: {
    HeaderMain,
    HomeComp,
    Footer
  },
};
</script>
<style src="./webpages/common.css"></style>
