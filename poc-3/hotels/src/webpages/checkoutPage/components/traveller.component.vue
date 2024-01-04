<template>

  <!-- division to contain the form to obtain additional travellers details -->
    <div class="travellerContainer">
      <hr />
      <div class="travellerBanner">
        <h4></h4>
        <button class="removeTraveller" v-on:click="removeTraveller(this.data)">Remove</button>
      </div>
      <div class="travellerViewFor">
        <div class="colsFull">
          <label for="name" class="travellerLabel">Full name</label>
          <input class="travellerInput travellerInput1" type="text" />
          <input class="travellerInput travellerInput2" type="text" />
        </div>
        <div class="colsFull">
          <label for="dob" class="travellerLabel">Date of Birth</label>
          <input class="travellerInput travellerInput3" type="date"/>
        </div>
      </div>
    </div>
</template>
<script>
    import { store } from '../../../store.js';

    export default{
        props : ['data'],
        data(){
            return{
                store
            }
        },
        methods:{
          // method to obtain the value and remove it from travellerDetailArr
            removeTraveller(val){
                console.log("value:", val);
                store.travellerDetailArr.splice(store.travellerDetailArr.indexOf(val), 1);
                store.travellerCount--;
                console.log("removed", store.travellerDetailArr);
                console.log("traveller count", store.travellerCount);
            }
        }
    }
</script>
<style scoped src="../checkoutPage-styles//traveller.css"></style>