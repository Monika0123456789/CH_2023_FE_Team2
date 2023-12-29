<template>
  <section class="img-section">
    <h1>Courtyard by Marriott New York</h1>
    <p>
      <font-awesome-icon :icon="['fas', 'location-dot']"/>
      5855 W Century Blvd, Los Angeles - 90045&nbsp;
      <a id="openMap" href="#" @click.prevent="openMapPopup">
        <font-awesome-icon :icon="['fas', 'eye']"  style="color: #1558f4;"/>
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

    <!-- Embedded Google Map Popup -->
    <div v-show="mapPopupVisible" class="map-container1">
      <div class="popup">
        <h2>View Our Hotel Location<font-awesome-icon :icon="['fas', 'xmark']" class="close" @click.prevent="closeMapPopup"/></h2>
        <div id="mapContainer">
          <!-- Google Maps iframe embedded in the popup -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698044038173!5m2!1sen!2sin"
            width="505" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
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
export default {
  data() {
    return {
      mapPopupVisible: false
    };
  },
  methods: {
  openMapPopup() {
    this.mapPopupVisible = true;
    console.log("map opened");
    document.querySelector('.map-container1').classList.add('visible');   // Add the "visible" class to show the map container
  },
  closeMapPopup() {
    this.mapPopupVisible = false;
    document.querySelector('.map-container1').classList.remove('visible'); // Remove the "visible" class to hide the map container
  },
  viewAllImages() {
    console.log("View all images clicked");
  }
}
};
</script>

<style src="../hotelDetails-styles/section-1.css" scoped></style>
