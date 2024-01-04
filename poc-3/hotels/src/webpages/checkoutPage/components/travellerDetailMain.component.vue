<template>
     <div class="travellerDetailContainer">
      <h1>Travelers Detail</h1>
      <!-- rendering the traveller component dynamically -->
      <travellerComp v-for="data in store.travellerDetailArr" :key="data" :data="data"/>
      <div>
        <!-- button to add the value to travellerDetailArr present in the store -->
        <button class="addTravellerBtn" v-on:click="addTraveller()">+ Add New Traveller</button>
      </div>
    </div>
</template>
<script>
    import travellerComp from "../components/traveller.component.vue";
    import { store } from '../../../store.js';
    export default{
      data(){
        return{
          store
        }
      },
      components:{
        travellerComp
      },
      methods:{
        // method to add the value to the travellerDetailArr present in store
        addTraveller(){
          console.log("date",store.travellerCount);
          store.travellerDetailArr.push(store.travellerCount++);
          console.log("added",store.travellerDetailArr);
        }
      }
    }
</script>
<style scoped src="../checkoutPage-styles/traveller.css"></style>