  <template>
    <section class="img-section">
      <div v-if="hotel">
        <h1>{{ hotel.name }}</h1>
        <p>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          {{ hotel.location }}&nbsp;
          <!-- Link to Open Map Popup -->
          <a id="openMap" href="#" @click.prevent="openMapPopup">
            <font-awesome-icon :icon="['fas', 'eye']" style="color: #1558f4" />
            <span style="color: #1558f4"><u>View On Map.</u></span>
          </a>
        </p>
        <!-- Images Section -->
        <div class="image-section">
          <div class="grid-content image-01">
            <img src="/assets/images/16.jpg" alt="hotel images" />
          </div>
          <div class="grid-content image-02">
            <img src="/assets/images/13.jpg" alt="hotel images" />
          </div>
          <div class="grid-content image-03">
            <img src="/assets/images/12(1).jpg" alt="hotel images" />
          </div>
          <div class="grid-content image-04">
            <img src="/assets/images/01(2).jpg" alt="hotel images" />
            <a href="#" class="overlay-container" @click.prevent="viewAllImages"
              >View all</a>
          </div>
        </div>
      </div>

      <!-- Embedded Google Map Popup -->
      <div v-show="mapPopupVisible" class="map-container1">
        <div class="popup">
            <div class="mapHeadingContainer">
              <h2>View Our Hotel Location</h2>
              <font-awesome-icon
              style="font-size: 25px;margin-top: 25px;margin-right: 10px;"
                :icon="['fas', 'xmark']"
                class="close"
                @click.prevent="closeMapPopup"
              />
            </div>
            <!-- Google Map Embed -->
            <div id="mapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698044038173!5m2!1sen!2sin"
                style="border: 0"
                width="100%"
                height="100%"
                loading="easy"
              >
              </iframe>
            </div>
            <div class="view-map">
              <font-awesome-icon :icon="['fas', 'location-dot']" />&nbsp;View in
              Google Map
            </div>
          </div>
      </div>
    </section>
  </template>
  <script>
  import axios from "axios";

  export default {
    // Props to receive the hotelID from the parent component
    props: ["hotelId"],
    data() {
      return {
        hotel: null,
        jsonData: [],
        mapPopupVisible: false,
      };
    },
    // LifeCycle hook to fetch hotel data when the component is created
    created() {
      this.fetchHotelData(Number(this.hotelId));
    },
    methods: {
      // Method for fetching the hotel data for the particular hotelID
      fetchHotelData(hotelId) {
        const jsonFilePath = "/assets/json/hotel-booking.json";
        axios
          .get(jsonFilePath)
          .then((response) => {
            this.jsonData = response.data.items;

            // Find the hotel with the given hotelId
            this.hotel = this.jsonData.find((item) => item.id === hotelId);

            // console.log('Fetched Hotel JSON Data:', this.jsonData);
            // console.log('Fetched Hotel Data:', this.hotel);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      },
      // Methods for handling the Map Popup
      openMapPopup() {
        this.mapPopupVisible = true;
      },
      closeMapPopup() {
        this.mapPopupVisible = false;
      },
      viewAllImages() {
        console.log("View all images clicked");
      },
    },
  };
  </script>
  <style src="../hotelDetails-styles/section-1.css" scoped></style>
