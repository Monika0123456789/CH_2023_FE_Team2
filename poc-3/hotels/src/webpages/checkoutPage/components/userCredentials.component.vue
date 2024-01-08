<template>
  <!-- division to contain the form to collect user credentials -->
    <form class="formContainer">
        <div class="colsFull">
          <label for="identityproof" class="form_label required">Upload your Id</label>
          <input type="file" class="idProof" id="identityproof"/>
        </div>
        <div class="colsHalf">
          <label for="name" class="form_label required">Full Name</label>
          <input class="form_inputs" id="name" type="text"  v-on:input="handleName($event)" :value="store.name"/>
        </div>
        <div class="colsHalf">
          <label for="email" class="form_label required">Email address</label>
          <input class="form_inputs" id="email" type="email"  v-on:input="handleEmail($event)" :value="store.email"/>
        </div>
        <div class="colsHalf">
          <label for="phone" class="form_label required">Mobile number</label>
          <input class="form_inputs" id="phone" type="number" v-on:input="handlePhone($event)" ref="phone" :value="store.phone"/>
        </div>
        <div class="colsHalf">
          <label for="nationality" class="form_label required">Nationality</label>
          <select class="form_inputs" id="nationality"  name="nationality" v-on:input="handleNationality($event)" ref="nationality" :value="store.nationality">
            <option value="IND">India</option>
            <option value="USA">United States</option>
            <option value="CAN">Canada</option>
            <option value="GBR">United Kingdom</option>
            <option value="AUS">Australia</option>
            <option value="GER">Germany</option>
            <option value="FRA">France</option>
            <option value="ITA">Italy</option>
            <option value="JPN">Japan</option>
            <option value="BRA">Brazil</option>
            <option value="CHN">China</option>
            <option value="RUS">Russia</option>
            <option value="ZAF">South Africa</option>
            <option value="ARG">Argentina</option>
            <option value="MEX">Mexico</option>
            <option value="ESP">Spain</option>
            <option value="NLD">Netherlands</option>
            <option value="SWE">Sweden</option>
            <option value="NOR">Norway</option>
            <option value="NZL">New Zealand</option>
            <option value="SGP">Singapore</option>
            <option value="KOR">South Korea</option>
            <option value="EGY">Egypt</option>
            <option value="NGA">Nigeria</option>
            <option value="SAU">Saudi Arabia</option>
          </select>
        </div>
        <div class="colsHalf">
          <label for="dob" class="form_label required">Date of Birth</label>
          <input class="form_inputs" id="dob" type="date" v-on:input="handleDob($event)" :value="store.dob" ref="dob"/>
        </div>
        <div class="colsHalf">
          <label for="gender" class="form_label required">Select Gender</label>
          <input type="radio" id="male" name="gender" value="male" v-on:input="handleGender($event)" :value="store.male"/>
          <label for="male" class="gender_label">Male</label>
          <input type="radio" id="female" name="gender" value="female" v-on:input="handleGender($event)" :value="store.female"/>
          <label for="female" class="gender_label">Female</label>
          <input type="radio" id="other" name="gender" value="other" v-on:input="handleGender($event)" :value="store.other"/>
          <label for="other" class="gender_label">Other</label>
        </div>
        <div class="colsFull">
          <label for="addr" class="form_label">Address</label>
          <textarea id="addr" class="addressField" v-on:input="handleAddress($event)" :value="store.address"/>
        </div>
    </form>
</template>
<script>
    import { store } from '../../../store.js';
    export default{
        data(){
            return{
                store
            }
        },
        methods: {
            // methods to store the user credentials into the store
            handleName(event){
                store.name = event.target.value;
            },
            handleEmail(event){
                store.email = event.target.value;
            },
            handlePhone(event){
                store.phone = event.target.value;
            },
            handleNationality(event){
                store.nationality = event.target.value;
            },
            handleDob(event){
                var presentDate = new Date();

                if(new Date(event.target.value)>=presentDate){
                  alert("date of birth cannot be in the future or in the present");
                  this.$refs.dob.value="";
                }
                else{
                  store.dob = event.target.value;
                }
            },
            handleGender(event){
                store.gender = event.target.value;
            },
            handleAddress(event){
                store.address = event.target.value;
            }
        },
    }
</script>
<style scoped src="../checkoutPage-styles/userCredentials.css"></style>