  <template>
    <!-- Room Options Component -->
    <div>
      <h1>Room options</h1>
      <hr/>
      
      <!-- Display Room Options for the Selected Hotel -->
      <div v-if="selectedHotel">
        <div v-for="room in selectedHotel.rooms" :key="room.roomId" class="mainroomoptioncontainer">
          <div class="roomoptionimageconatiner">
            <img v-for="(image, index) in room.images.slice(0, 1)" :key="index" :src="image" :alt="`Room ${room.roomId} Image ${index + 1}`" />
          </div>
          <div class="roomoptiontextconatiner">
            <h2>Room {{ room.roomId }}</h2>
            <div class="detailroomfacilities">
              <ul>
              <li class="facilityList" v-for="(facility, index) in room.roomFacilities.slice(0, 3)" :key="index">{{facility}}</li>
                <li><span class="detailmorelink" @click="handleRoomSelection(room)">more</span></li>
              </ul>
            </div>
            <div class="price">
              <h3>{{ `Price: $${selectedHotel.price}` }}</h3>
              <!-- Router Link to Navigate to Chekout Page -->
              <router-link :to="{name: 'checkout', params : {hotelId : this.hotelId}}" custom v-slot="{ navigate }"> <button class="roomoptionselectroombutton" @click="selectRoom" v-on:click="navigate">Select Room</button></router-link>  
            </div>
            </div>
          <!-- room option popup -->
            <div v-if="room === selectedRoom" class="hoteldetail-popup-container">
              <div>
                <div class="hoteldetail-popup-content">
                  <div class="popupheadingpart">
                    <h2>Room {{ selectedRoom.roomId }}</h2>
                    <font-awesome-icon :icon="['fas', 'xmark']"  class="detailpopupclose" @click="closePopup" />
                  </div>
                  <hr/>
                  <img :src="selectedRoom.images[0]" :alt="`Room ${selectedRoom.roomId} Image 1`" />
                  <div class="staticdata">
                    <p>Experience luxury in our spacious deluxe rooms.</p>
                  </div>
                  <div class="facilities">
                    <h3>Facilities</h3>
                    <div v-for="(facility, index) in selectedRoom.roomFacilities" :key="index">
                        <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;"/>&nbsp;&nbsp;{{ facility }}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import { store } from '../../../store.js';

  export default {
    // hotelID from the parent component
    props: {
      hotelId: { type: Number, required: true },
    },
    data() {
      return {
      selectedRoom: null,
      hotel: null,
      selectedHotel: null,
      store
      };
    },
    // LifeCycle hook to fetch hotel data when the component is created
    created() {
      console.log('Hotel ID Type:', typeof this.hotelId);
      console.log("hotel id", this.hotelId)
      this.fetchHotelData(Number(this.hotelId));
    },
    methods: {
      // Method to set hotelID in the store
      setHotelId(data){
        store.hotelId = data;
        console.log("store id", store.hotelId)
      },
      // Methods to fetch hotel data based on the given hotelID
      fetchHotelData(hotelId) {
      const jsonFilePath = '/assets/json/hotel-booking.json';
      axios
        .get(jsonFilePath)
        .then((response) => {
          this.hotel = response.data.items.find((item) => item.id === hotelId);
          this.selectedHotel = this.hotel; 
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      },
      //  Method to handle room selection and display popup
      handleRoomSelection(room) {
        this.selectedRoom = room;
      },
      // Method to close the room options popup
      closePopup() {
        this.selectedRoom = null;
      },
  },

  };
  </script>

  <style src="../hotelDetails-styles/section-4.css" scoped></style>
