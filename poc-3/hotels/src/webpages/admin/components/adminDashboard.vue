<template>
  <div class="container">

    <button @click="logout" class="logout_button"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />&nbsp;LogOut</button>

    <!-- table containing the customer hotel booking details  -->
    <table class="customer_table">
      <thead>
        <tr class="heading_row">
          <th>Booking Id</th>
          <th>Booked by</th>
          <th>Check-in</th>
          <th>Check-out</th>
          <th>Guest</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(dataObj, index) in booking_details.bookingData" :key="index">
          <td>{{ dataObj.bookingId }}</td>
          <td>{{ dataObj.name }}</td>
          <td>{{ dataObj.checkin }}</td>
          <td>{{ dataObj.checkout }}</td>
          <td>{{ dataObj.travellerCount }}</td>
          <td class="amount">${{ dataObj.price }}</td>
        </tr>

      </tbody>

    </table>


  </div>
</template>
<script>
export default {
  data() {
    return {
      // obtaining the customer hotel booking details object from the local storage
      booking_details: {
        bookingData: JSON.parse(localStorage.getItem("Data")) || []
      }
    }
  },
  methods: {
    logout() {
      localStorage.setItem("loggedIn", JSON.stringify(false))
      this.$router.push('/adminLogin')
    }
  }

}
</script>
<style src="../adminPageStyles/dashboard.css" scoped></style>
