<template>
  <div class="main_container">

    <img src="/assets/images/logo.svg" alt="logo" class="logo" />


    <form @submit.prevent="checkAdminLogin">
      <div class="email_container">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" name="email" class="email_field" ref="emailField" required />
      </div>

      <div class="password_container">
        <label for="password">Password</label>
        <input required type="password" id="password" v-model="password" name="password" ref="passwordRef"
          class="password_field" />
      </div>
      <button type="submit" class="submit_button">Sign In</button>
    </form>

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
          // alert("login success");
          // console.log("success")
          // console.log("login success")
          this.$router.push('/adminDashboard')
          localStorage.setItem("loggedIn", JSON.stringify(true))

        }
        else {
          alert("you have entered wrong credentials");
          this.email = '',
            this.password = ''
        }
      }
    }

  }

}
</script>
<style src="../adminPageStyles/login.css" scoped></style>