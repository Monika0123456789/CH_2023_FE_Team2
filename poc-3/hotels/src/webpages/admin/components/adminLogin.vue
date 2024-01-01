<template>
  <div class="main_container">

    <img src="/assets/images/logo.svg" alt="logo" class="logo" />


    <div class="email_container">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" v-model="email" name="email" class="email_field" ref="emailField" required />
    </div>

    <div class="password_container">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" v-model="password" name="password" class="password_field" required />
    </div>

    <button type="submit" class="submit_button" @click="checkAdminLogin">Sign In</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  mounted() {
    this.$refs.emailField.focus();
  },
  methods: {
    checkAdminLogin() {
      // obtaining the object containing the admin email and password
      let dataObject = JSON.parse(localStorage.getItem("adminData"));

      // admin email and password matching is done here
      if (this.email.length !== 0 && this.password.length !== 0) {
        if (this.email === dataObject.email && this.password === dataObject.password) {
          // on successful login redirect to adminLanding page
          // alert("login success");
          // console.log("success")
          this.$router.push('/adminDashboard').then(() => {
            console.log("login success")
          })
        }
        else {
          alert("you have entered wrong credentials");
          this.email = '',
            this.password = ''
        }
      }
      else {
        alert("please fill all the credentials")
      }

    }

  }

}
</script>
<style src="../adminPageStyles/login.css" scoped></style>