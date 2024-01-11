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
            <option v-for="nation in nationArr" :value="nation.code">{{ nation.name }}</option>
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

              store,
              nationArr : [{code: "IND", name: "India"}, {code: "USA", name: "USA"}, {code: "CAN", name: "Canada"}, {code: "GBR", name: "UK"}, {code: "AUS", name: "Australia"}, {code : "GER", name: "Germany"},{code: "FRA", name : "France"}, {code : "ITA", name : "Italy"}, {code : "JPN", name : "Japan"}, {code : "BRA", name : "Brazil"}, {code : "CHN", name : "China"}, {code : "RUS", name : "Russia"}, {code : "ZAF", name : "South Africa"},{code: "ARG", name : "Argentina"}, {code:"MEX", name: "Mexico"}, {code : "ESP", name : "Spain"}, {code : "NED", name : "Netherlands"}, {code: "SWE", name: "Sweden"}, {code: "NOR", name: "Norway"}, {code: "NZL", name: "New Zealand"}, {code: "SGP", name: "Singapore"}, {code: "KOR", name: "South Korea"}, {code: "EGY", name: "Egypt"}, {code: "NGA", name: "Nigeria"}, {code: "SAU", name: "Saudi Arabia"}]

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