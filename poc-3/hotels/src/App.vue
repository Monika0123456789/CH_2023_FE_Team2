<template>
  <div id="app">

    <HeaderMain />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import HeaderMain from './webpages/header/components/headerMain.vue';
import Footer from './webpages/footer/components/footerMain.vue'

export default {
  created() {
    const adminData = {
      email: "hotel.booking.admin@gmail.com",
      password: "admin@123"
    };
    localStorage.setItem("adminData", JSON.stringify(adminData))

  },
  components: {
    HeaderMain,
    Footer,
  },
};
</script>
<style src="./webpages/common.css"></style>
