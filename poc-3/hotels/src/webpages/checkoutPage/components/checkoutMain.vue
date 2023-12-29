<template>
    <div class="container">
        <h1>Booking Details</h1>
        <hr />
        <roomDetailComp/>
        <br>
        <userCredentialsComp/>
    </div>
    
</template>
<script>
    import roomDetailComp from "./roomDetail.component.vue";
    import userCredentialsComp from "./userCredentials.component.vue";
    export default{
        data(){

        },
        components : {
            roomDetailComp,
            userCredentialsComp
        }
    }
</script>
<style></style>