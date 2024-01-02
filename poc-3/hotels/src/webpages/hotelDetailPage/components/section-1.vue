<template>
    <section class="img-section">
    <div v-if="isLoading">
      <!-- You can customize the loading message or spinner here -->
      <p>Loading hotel data...</p>
    </div>
    <div v-else>
      <h1>{{ hotel.name }}</h1>
      <p v-if="hotel">
        <font-awesome-icon :icon="['fas', 'location-dot']"/>
        {{hotel.location}}&nbsp;
        <a id="openMap" href="#" @click.prevent="openMapPopup">
          <font-awesome-icon :icon="['fas', 'eye']" style="color: #1558f4;"/>
          <span style="color: #1558f4;"><u>View On Map.</u></span>
        </a>
      </p>
    <div class="image-section">
      <div class="grid-content image-01">
        <img src="/assets/images/16.jpg" alt="hotel images">
      </div>
      <div class="grid-content image-02">
        <img src="/assets/images/13.jpg" alt="hotel images">
      </div>
      <div class="grid-content image-03">
        <img src="/assets/images/12(1).jpg" alt="hotel images">
      </div>
      <div class="grid-content image-04">
        <img src="/assets/images/01(2).jpg" alt="hotel images">
        <a href="#" class="overlay-container" @click.prevent="viewAllImages">View all</a>
      </div>
    </div>
  </div>

    <!-- Embedded Google Map Popup -->
    <div v-show="mapPopupVisible" class="map-container1">
      <div class="popup">
        <h2>View Our Hotel Location<font-awesome-icon :icon="['fas', 'xmark']" class="close" @click.prevent="closeMapPopup"/></h2>
        <div id="mapContainer">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698044038173!5m2!1sen!2sin"
            width="505" height="450" style="border:0;" allowfullscreen="" loading="easy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div class="view-map">
          <font-awesome-icon :icon="['fas', 'location-dot']"/>&nbsp;View in Google Map
        </div>
      </div>
    </div>
</section>
</template>
<script>
import axios from 'axios';

export default {
  props: ['hotelId'],
  data() {
    return {
      hotel: null, 
      isLoading: true, 
      jsonData: [],
      mapPopupVisible: false
    };
  },
  watch: {
    hotelId(newHotelId) {
      const hotelIdToFind = Number(newHotelId); 
      this.fetchHotelData(hotelIdToFind);
    },
  },
  created() {
    console.log('Hotel ID Type:', typeof this.hotelId);
    this.fetchHotelData(Number(this.hotelId));
  },
  methods: {
    fetchHotelData(hotelId) {
      const jsonFilePath = '/assets/json/hotel-booking.json';

      axios
        .get(jsonFilePath)
        .then(response => {
          this.jsonData = response.data.items;

          // Find the hotel with the given hotelId
          this.hotel = this.jsonData.find(item => item.id === hotelId);

          // Log the fetched hotel data (you can remove this line in production)
          console.log('Fetched Hotel JSON Data:', this.jsonData);
          console.log('Fetched Hotel Data:', this.hotel);

          this.isLoading = false; // Set loading state to false after data is fetched
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.isLoading = false; // Set loading state to false in case of an error
        });
    },
    openMapPopup() {
      this.mapPopupVisible = true;
      document.querySelector('.map-container1').classList.add('visible');
    },
    closeMapPopup() {
      this.mapPopupVisible = false;
      document.querySelector('.map-container1').classList.remove('visible');
    },
    viewAllImages() {
      console.log('View all images clicked');
    },
  },
};
</script>
<style src="../hotelDetails-styles/section-1.css" scoped></style>
