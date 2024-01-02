<template>
    <div class="summaryContainer" v-on:click="display()">
      <div class="bookingDetails">
        <label for="checkInDate" class="bookingLabels">Check-In</label>
        <h4 class="summaryInp">{{ store.checkin }}</h4>
      </div>
      <div class="bookingDetails">
        <label for="checkOutDate" class="bookingLabels">Check-Out</label>
        <h4 class="summaryInp">{{ store.checkout }}</h4>
      </div>
      <div class="bookingDetails">
        <label for="amount" class="bookingLabels">Total Amount</label>
        <h4 class="summaryImp" style="color:green">${{  }}</h4>
      </div>
    </div>
</template>
<script>
    import { store } from '../../../store.js';
    export default{
        data(){
            return{
                store
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped src="../checkoutPage-styles/summary.css"></style>