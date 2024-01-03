<template>
  <div id="app">

    <HeaderMain />
    <router-view></router-view>
    <Footer v-if="$route.path != '/adminDashboard'" />
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
    const loggedIn = false;
    localStorage.setItem("adminData", JSON.stringify(adminData))
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn))

  },
  components: {
    HeaderMain,
    Footer,
  },
};
</script>
<style src="./webpages/common.css"></style>
