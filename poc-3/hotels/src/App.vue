<template>
 <div id="app">
    <!-- <HeaderMain />
    <HomeComp/>
      <Footer /> -->
      <HotelListPage/>
  </div>
</template>
<script>
import HeaderMain from './webpages/header/components/headerMain.vue';
import  HomeComp from './webpages/homePage/components/home.vue';
import Footer from './webpages/footer/components/footerMain.vue';
import HotelListPage from './webpages/hotelListingPage/components/hotelListMain.vue'

export default {
  components: {
    HeaderMain,
    HomeComp,
    Footer,
    HotelListPage
  },
};
</script>
<style src="./webpages/common.css"></style>
