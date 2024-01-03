<template>
  <div class="hotelListMainContainer">
    <div>
      <ul style="padding-left: 0px;">
        <li style="list-style: none; margin-top: 5px;" v-for="item in displayedHotels" :key="item.id">
          <div class="hotelCard">
            <div class="hotelImage">
              <img :src="item.img" alt="Hotel Image" />
            </div>
            <div class="hotelData">
              <div class="rating">
                <font-awesome-icon style="color: rgb(245, 217, 34);" v-for="i in 5" :key="i"
                  :icon="getStarIcon(i, item.rating)" />
              </div>
              <h2>{{ item.name }}</h2>
              <p><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ item.location }}</p>
              <p>
              <ul style="list-style-type: none;display: flex;padding: 0;flex-wrap: wrap;">
                <li style="margin-right: 10px;" v-for="(facility, index) in item.Facilities.slice(0, 3)" :key="index">{{
                  facility }}</li>
                <li style="cursor: pointer;"><a @click="openPopup(item)" href="#">More+</a></li>
              </ul>
              </p>
              <ul style="padding: 0;">
                <li style="list-style: none;margin: 10px 0;" v-for="(additionalInfo, index) in item.additionalInfo"
                  :key="index">
                  <font-awesome-icon :style="{ color: additionalInfo === 'Non Refundable' ? 'red' : 'green' }"
                    icon="fa-solid fa-circle-check" />{{ additionalInfo }}
                </li>

              </ul>
              <div style="display: flex;justify-content: space-between;">
                <p class="hotel_pricing"> ${{ item.price }} &nbsp;<s>$1000</s></p>
                <button class="selectRoomButton" @click="openHotelDetails(item)">Select Room</button>
              </div>

            </div>
          </div>
          <div id="popup-container" class="popup">
            <div class="popup_content">
              <span class=close @click="closePopUp">
                &times;
              </span>
              <h2 id="popup-hotel-name">{{ popupData.name }}</h2>
              <hr />
              <p id="popup-long-desc">{{ popupData.longDesc }}</p>
              <ul id="popup-facilities-list">
                <li v-for="(facility, index) in popupData.Facilities" :key="index">{{ facility }}</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- <div class="toggleButtons"><button>1</button><button>2</button></div>
  </div> -->

    <div class="toggleButtons">
      <button class="pageButtons" @click="previousPage()">&lt;</button>
      <button class="pageButtons" v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)"
        :class="{ 'selectedPage': currentPage === pageNumber }">
        {{ pageNumber }}
      </button>
      <button class="pageButtons" @click="nextPage()">&gt;</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../../../router';
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar)
import { filteredHotel } from '../js/filteredHotelId';
export default {
  data() {
    return {
      jsonData: [],
      currentPage: 1,
      hotelsPerPage: 5,
      popupData: {
        name: '',
        longDesc: '',
        Facilities: [],
      },
    };
  },



  computed: {
    //counting total number of pages based on total entries of hotel in jsondata
    pageCount() {
      // console.log(Math.ceil(this.jsonData.length / this.hotelsPerPage))
      return Math.ceil(this.jsonData.length / this.hotelsPerPage);
    },
    displayedHotels() {
    const hotelIds = filteredHotel.filteredId;
    if (!hotelIds || hotelIds.length === 0) {
      return [];
    }
    const filteredHotels = this.jsonData.filter((hotel) => hotelIds.includes(hotel.id));

    const startIndex = (this.currentPage - 1) * this.hotelsPerPage;
    const endIndex = startIndex + this.hotelsPerPage;

    return filteredHotels.slice(startIndex, endIndex);
  },
  },
  methods: {
    // Change the current page
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    nextPage() {
      if (this.currentPage < (Math.ceil(this.jsonData.length / this.hotelsPerPage))) {
        this.currentPage = this.currentPage + 1;
      }
      else {
        this.currentPage = this.currentPage;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }
      else {
        this.currentPage = this.currentPage
      }

    },
    getStarIcon(index, rating) {
      if (index <= rating) {
        return 'fas fa-star';
      } else if (index - 0.5 === rating) {
        return 'fas fa-star-half-stroke';
      } else {
        return 'far fa-star';
      }
    },
    openPopup(item) {
      this.popupData.name = item.name;
      this.popupData.longDesc = item.longDesc;
      this.popupData.Facilities = item.Facilities;
      document.getElementById('popup-container').style.display = 'block';
    },
    closePopUp() {
      document.getElementById('popup-container').style.display = 'none';
    },
    openHotelDetails(item) {
      router.push({ name: 'hoteldetails', params: { hotelId:  item.id} });
      window.scrollTo(0, 0);
    },

  },

  created() {
    const jsonFilePath = '/assets/json/hotel-booking.json';

    axios.get(jsonFilePath)
      .then(response => {
        this.jsonData = response.data.items;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>
<style scoped src="../hotelListingPageStyles/hotelList.css"></style>
