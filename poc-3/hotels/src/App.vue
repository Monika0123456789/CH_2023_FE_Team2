<template>
 <div id="app">
    <HeaderMain />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderMain from './webpages/header/components/headerMain.vue';
export default {
  components: {
    HeaderMain
  },
};
</script>
<style src="./webpages/common.css"></style>

