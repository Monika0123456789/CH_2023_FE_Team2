<template>
    <!-- div to contain the user checkin and checkout dates and the amount to be paid -->
    <div class="summaryContainer">
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
        <h4 class="summaryImp" style="color:green">${{ Number(store.price)*store.rooms }}</h4>
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