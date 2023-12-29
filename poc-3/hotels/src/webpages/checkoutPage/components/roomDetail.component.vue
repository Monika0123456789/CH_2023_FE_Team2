<template>
    <section>
        <!-- section to display details of the selected hotel -->
        <div class="hotel_detail">
          <div class="left_img_division">
            <img src="/assets/images/02(3).jpg" alt="image1" />
            <img src="/assets/images/13.jpg" alt="image2" />
            <img src="/assets/images/15.jpg" alt="image3" />
            <img src="/assets/images/16.jpg" alt="image4" />
          </div>
          <div class="right_hotel_detail_division">
            <div>
              <h1>Downtown Delight</h1>

              <p>
                <font-awesome-icon :icon="['fas', 'location-dot']"/>
                5855 W Century Blvd, Los Angeles - 90045
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                pariatur unde rerum voluptatibus, animi voluptatum nemo natus
                maxime vel iure consequatur quidem repellat earum illo quis
                dolorem voluptas possimus tempore.
              </p>
            </div>
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

    export default{
        data(){
            return{
                store
            }
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