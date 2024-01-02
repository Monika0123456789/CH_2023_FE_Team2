<template>
    <div class="container">
        <h1>Booking Details</h1>
        <hr />
        <roomDetailComp/>
        <br>
        <userCredentialsComp/>
        <br>
        <checkinCheckoutComp/>
        <br>
        <travellerDetailMainComp/>
        <br><br><br>
        <summaryComp/>
        <br><br>
    </div>
    
</template>
<script>
    import roomDetailComp from "./roomDetail.component.vue";
    import userCredentialsComp from "./userCredentials.component.vue";
    import checkinCheckoutComp from "./checkinCheckout.component.vue";
    import travellerDetailMainComp from "./travellerDetailMain.component.vue";
    import summaryComp from "./summary.component.vue";

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
            summaryComp
        },
    }
</script>
<style></style>