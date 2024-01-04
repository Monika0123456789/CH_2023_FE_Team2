<template>
    <!-- division to contain the form to collect checkin and checkout date from user -->
    <div class="checkinCheckoutContainer">
        <div class="cols">
          <label class="required dateLabels">Check-in Date</label>
          <input type="date" class="dateInputs" ref="checkinDate" v-on:input="handleCheckindate()" />
        </div>
        <div class="cols">
          <label class="required dateLabels">Check-out Date</label>
          <input type="date" class="dateInputs" ref="checkoutDate" v-on:input="handleCheckoutdate()" />
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
            // methods to handle and store the checkin and checkout dates into store
            handleCheckindate(){
                var q = new Date();
                var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
                var userDate = new Date(this.$refs.checkinDate.value);

                if(date > userDate){
                    alert("checkin date cannot be in the past!");
                    this.$refs.checkinDate.value = "";
                }
                else{
                    store.checkinDate = userDate;
                    store.checkin = this.$refs.checkinDate.value;
                }
                // Sat Dec 30 2023 05:30:00 GMT+0530 (India Standard Time)
            },

            handleCheckoutdate(){
                var q = new Date();
                var userDate = new Date(this.$refs.checkoutDate.value);
                var presentDate = new Date(q.getFullYear(),q.getMonth(),q.getDate());

                if(userDate < presentDate || userDate < store.checkinDate){
                    alert("checkout date cannot be in the past compared to present and checkin date!");
                    this.$refs.checkoutDate.value = "";
                }
                else{
                    store.checkoutDate = userDate;
                    store.checkout = this.$refs.checkoutDate.value;
                }

            }
        }
    }
</script>
<style scoped src="../checkoutPage-styles/checkinCheckout.css"></style>