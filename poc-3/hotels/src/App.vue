<template>
 <div id="app">
    <HeaderMain />
    <HomeComp/>
  </div>
</template>
<script>
import HeaderMain from './webpages/header/components/headerMain.vue';
import  HomeComp from './webpages/homePage/components/home.vue';

export default {
  components: {
    HeaderMain,
    HomeComp
  },
};
</script>
<style></style>