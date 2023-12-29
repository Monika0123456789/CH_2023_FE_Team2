<template>
  <ul>
    <li style="list-style: none; margin-top: 5px;" v-for="item in displayedHotels" :key="item.id">
      <div class="hotelCard">
        <div class="hotelImage">
          <img :src="item.img" alt="Hotel Image" />
        </div>
        <div class="hotelData">
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-solid fa-star" />
          <h2>{{ item.name }}</h2>
          <p><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ item.location }}</p>
          <p>
          <ul style="list-style-type: none;display: flex;padding: 0;">
            <li style="margin-right: 10px;" v-for="(facility, index) in item.Facilities.slice(0, 3)" :key="index">{{
              facility }}</li>
            <li style="cursor: pointer;"><a href="#">More+</a></li>
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
    </li>
  </ul>

  <!-- <div class="toggleButtons"><button>1</button><button>2</button></div>
  </div> -->

  <div class="toggleButtons">
    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)">
      {{ pageNumber }}
    </button>
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
  width: 70%;
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

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 15px 0;
}
</style>
