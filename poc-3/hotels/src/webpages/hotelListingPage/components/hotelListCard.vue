<template>
  <div>
    <ul>
      <li style="list-style: none; margin-top: 5px;" v-for="item in jsonData" :key="item.id">
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
            <!-- <p>Rating: {{ item.rating }}</p> -->
            <h2>{{ item.name }}</h2>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ item.location }}</p>
            <p>
            <ul>
              <li v-for="(facility, index) in item.Facilities.slice(0, 3)" :key="index">{{ facility }}</li>
              <li>more+</li>
            </ul>
            </p>
            <ul>
              <li style="list-style: none;" v-for="(additionalInfo, index) in item.additionalInfo" :key="index">
                <font-awesome-icon :style="{color: additionalInfo ==='Non Refundable'?'red':'green'}"
                  icon="fa-solid fa-circle-check" />{{ additionalInfo }}
              </li>

            </ul>
            <div style="display: flex;justify-content: space-between;">
              <p>Price: ${{ item.price }} &nbsp;&nbsp;<s>$1000</s></p>
              <button>Select Room</button>
            </div>

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsonData: [],
    };
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
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  gap: 3%;
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
</style>
