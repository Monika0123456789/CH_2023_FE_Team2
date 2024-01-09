<template>
    <section>
        <!-- section to dynamically display details of the selected hotel -->
          <div class="hotel_detail">
            <!-- left division to contain the images -->
            <div class="left_img_division">
              <img src="/assets/images/02(3).jpg" alt="image1" />
              <img src="/assets/images/13.jpg" alt="image2" />
              <img src="/assets/images/15.jpg" alt="image3" />
              <img src="/assets/images/16.jpg" alt="image4" />
            </div>

            <!-- right division to contain the hotel description -->
            <div class="right_hotel_detail_division">
              <div>

                <!-- name of the hotel -->
                <h1>{{ this.hotelData.name }}</h1>

                <!-- hotel location -->
                <p>
                  <font-awesome-icon :icon="['fas', 'location-dot']"/>
                  {{ this.hotelData.location }}
                </p>

                <!-- short description of hotel -->
                <p>
                  {{ this.hotelData.desc }}
                </p>
              </div>

              <!-- division to contain icons and hotel facilities text -->
              <div class="topFacilitiesContainer">
                <div class="iconContainer">
                  <font-awesome-icon :icon="['fas', 'bed']" class="icons"/>
                  <p>
                    Type <strong>King</strong>
                  </p>
                </div>
                <div class="iconContainer">
                  <font-awesome-icon :icon="['fas', 'arrow-left']" class="icons"/>
                  <p>
                    Side <strong>Left Side</strong>
                  </p>
                </div>
                <div class="iconContainer">
                  <font-awesome-icon :icon="['fas', 'stairs']" class="icons"/>
                  <p>
                    Floor <strong>3rd Floor(T5)</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

        <!-- section to implement the button to increment and decrement rooms -->
        <div class="room_quantity">
          <button v-on:click="incrementRoomCount()" class="no_border_button">
            +
          </button>
          <span>{{ store.rooms }}</span>
          <button v-on:click="decrementRoomCount()" class="no_border_button">
            -
          </button>
          Rooms
        </div>
    </section>
</template>
<script>
    import { store } from "../../../store.js";
    import jsonData from "../../../../public/assets/json/hotel-booking.json";

    export default{
        data(){
            return{
                store,
                hotelData : null
            }
        },
        created(){
          // obtaining the data of the particular hotel with given hotelid
          this.hotelData = jsonData.items.find(item => item.id === Number(this.$route.params.hotelId));

          // storing the hotel price in the store
          store.price = this.hotelData.price;
        },
        methods: {
            incrementRoomCount(){
                if(store.rooms >= 9 ){
                    alert("maximum number of rooms allowed per person is 9");
                }
                else{
                    store.rooms++;
                }
            },
            decrementRoomCount(){
                if(store.rooms <= 1 ){
                    alert("minimum number of rooms per person is 1");
                }
                else{
                    store.rooms--;
                }
                
            }
        }
    }
</script>
<style scoped src="../checkoutPage-styles/roomDetail.css"></style>