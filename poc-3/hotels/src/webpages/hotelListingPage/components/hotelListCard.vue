<template>
  <div class="hotelListMainContainer">
    <div>
      <ul>
        <li style="list-style: none; margin-top: 5px;" v-for="item in displayedHotels" :key="item.id">
          <div class="hotelCard">
            <div class="hotelImage">
              <img :src="item.img" alt="Hotel Image" />
            </div>
            <div class="hotelData">
              <div class="rating">
                <font-awesome-icon style="color: rgb(245, 245, 34);" v-for="i in 5" :key="i"
                  :icon="getStarIcon(i, item.rating)" />
              </div>
              <h2>{{ item.name }}</h2>
              <p><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ item.location }}</p>
              <p>
              <ul style="list-style-type: none;display: flex;padding: 0;">
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
                <button class="selectRoomButton">Select Room</button>
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
      <button v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)">
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
    // Calculate the subset of hotels to display based on the current page
    displayedHotels() {
      const startIndex = (this.currentPage - 1) * this.hotelsPerPage;
      // console.log(startIndex)
      const endIndex = startIndex + this.hotelsPerPage;
      // console.log(endIndex)
      return this.jsonData.slice(startIndex, endIndex);
    },
  },
  methods: {
    // Change the current page
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo(0, 0);
    },
    getStarIcon(index, rating) {
      if (index <= rating - 0.5) {
        return 'fas fa-star';
      } else if (index <= rating) {
        return 'fas fa-star-half-alt';
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
<style scoped>
.hotelCard {
  box-shadow: 5px 5px 5px 5px rgba(116, 115, 115, 0.5);
  border-radius: 10px;
  display: flex;
  gap: 3%;
  margin: 0 2% 2% 2%;
  padding: 5px;
  box-sizing: border-box;
}

.hotelCard:hover {
  background-color: aliceblue;
  box-shadow: 5px 5px 10px black;
}

.hotelImage {
  width: 30%;
}

.hotelImage>img {
  width: 100%;
  height: 100%;
  border-radius: 10px;

}

.hotelData {
  width: 65%;
}

.rating {
  color: black;
}

.rating .fas.fa-star,
.rating .fas.fa-star-half-alt {
  color: #f8d62b;
}

/* styling the select room button in the last section of the right container */
.selectRoomButton {
  box-sizing: border-box;
  border-radius: 10px;
  width: 20%;
  background-color: black;
  color: white;
  cursor: pointer;
}

.selectRoomButton:hover {
  background-color: rgb(215, 250, 220);
  color: black;
  box-shadow: 5px 5px 5px black;
}

/* styling the hotel pricing */
.hotel_pricing {
  color: black;
  font-size: 1.5rem;
}

.hotelListMainContainer {
  display: flex;
  flex-direction: column;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 15px 0;
}

/* styling the background of the popup */
.popup {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

/* styling the popup container */
.popup_content {
  background-color: whitesmoke;
  margin: 3% auto;
  padding: 20px;
  border: 1px solid #ccc;
  width: 40%;
  height: 80%;
  text-align: justify;
  position: relative;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: auto;
}

/* style for the closing the popup container */
.close {
  color: #aaa;
  float: right;
  font-size: 45px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  cursor: pointer;
}
</style>
