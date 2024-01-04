<template>
    <button class="submitBtn" v-on:click="validateAndStoreData()">Proceed</button>
</template>
<script>
    import { store } from '../../../store.js';
    export default{
        data(){
            return{
                store,
            }
        },
        methods:{
            // method to validate and store the user credentials data into the localStorage
            validateAndStoreData(){
                if(store.name === ""){
                    alert("please enter your full name");
                }
                else if(store.email === ""){
                    alert("please enter your email address");
                }
                else if(store.phone === ""){
                    alert("please enter your phone number");
                }
                else if(store.dob === ""){
                    alert("please enter your date of birth");
                }
                else if(store.gender === ""){
                    alert("please enter your gender");
                }
                else if(store.name === ""){
                    alert("please enter your full name");
                }
                else if(store.checkin === null || store.checkout === null){
                    alert("please fill in checkin and checkout dates");
                }
                else{
                    // obtaining a random number of length 13 as bookingid
                    var bookingId =  Math.floor(Math.pow(10, 13 - 1) + Math.random() * (Math.pow(10, 13) - Math.pow(10, 13 - 1) - 1));
                    alert(bookingId)

                    // storing the user credentials and bookingId in localStorage
                    store.userData.push({ bookingId : bookingId ,name : store.name, email : store.email, phone : store.phone, dob : store.dob, gender : store.gender, checkin : store.checkin, checkout : store.checkout, travellerCount : store.travellerCount});
                    localStorage.setItem("Data", JSON.stringify(store.userData));
                }

            }
        }
    }
</script>
<style scoped src="../checkoutPage-styles/localStorage.css"></style>