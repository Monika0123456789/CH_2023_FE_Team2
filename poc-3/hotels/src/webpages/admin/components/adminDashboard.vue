<template>
  <div class="container">

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
          <td>{{ dataObj.id }}</td>
          <td>{{ dataObj.data.fullName }}</td>
          <td>{{ dataObj.data.checkin }}</td>
          <td>{{ dataObj.data.checkout }}</td>
          <td>{{ dataObj.data.numberOfTravellers }}</td>
          <td class="amount">${{ dataObj.data.price }}</td>
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
        bookingData: JSON.parse(localStorage.getItem("Booking Details")) || []
      }
    }
  }

}
</script>
<style src="../adminPageStyles/dashboard.css" scoped></style>
