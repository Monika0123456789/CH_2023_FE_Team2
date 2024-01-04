<template>
    <div class="container">
        <!-- rendering all the sub components of check out page here -->
        <h1>Booking Details</h1>
        <hr />

        <!-- sub component to provide details of the room selected -->
        <roomDetailComp/>
        <br>

        <!-- sub component to obtain user credentials -->
        <userCredentialsComp/>
        <br>

        <!-- sub component to obtain checkin and checkout dates from the user -->
        <checkinCheckoutComp/>
        <br>

        <!-- sub component to obtain details of additional travellers -->
        <travellerDetailMainComp/>
        <br><br><br>

        <!-- sub component to display checkin and checkout dates selected by the user and the price to be paid -->
        <summaryComp/>
        <br>

        <!-- sub component to obtain the user credentials and store it in local storage -->
        <localStorageComp/>
        <br>
        
    </div>
    
</template>
<script>
    import roomDetailComp from "./roomDetail.component.vue";
    import userCredentialsComp from "./userCredentials.component.vue";
    import checkinCheckoutComp from "./checkinCheckout.component.vue";
    import travellerDetailMainComp from "./travellerDetailMain.component.vue";
    import summaryComp from "./summary.component.vue";
    import localStorageComp from "./localStorage.component.vue";
    import { store } from '../../../store.js';

    export default{
        data(){
            return{
                store
            }
        },
        components : {
            roomDetailComp,
            userCredentialsComp,
            checkinCheckoutComp,
            travellerDetailMainComp,
            summaryComp,
            localStorageComp,
        },
    }
</script>
<style></style>