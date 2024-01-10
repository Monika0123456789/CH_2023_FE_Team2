  <template>
    <!-- Featured Hotels Section -->
    <section class="section-3">
      <h2>Featured Hotels</h2>
      <div class="section3-container">
        <!-- Hotel Cards Loop -->
        <div v-for="(hotel, index) in hotels" :key="index" class="card">
          <!-- Hotel Image with Router Link -->
          <div class="hotel-img">
            <router-link  to="/hotellisting" onclick="window.scrollTo(0, 0);">
            <img :src="hotel.imgSrc" alt="">
            </router-link>
            <button class="location-btn">
              <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #f4f5f5;" />
              &nbsp;{{ hotel.location }}
            </button>
          </div>
          <h3>{{ hotel.name }}</h3>
          <div class="fig-caption">
            <h4><span class="rate">${{ hotel.rate }}</span>/starting at</h4>
            <h4 class="rating">{{ hotel.rating }}
              <font-awesome-icon :icon="['fas', 'star']" style="color: #ffdf00; font-size: 20px;"/>
            </h4>
          </div>
        </div>  
        <!-- End of Hotel Cards Loop -->
      </div>
    </section>
  </template>

  <script>
  export default {
    data() {
      return {
        // Array of Featured Hotel Data
        hotels: [
          {
            name: 'Baga Comfort',
            imgSrc: '/assets/images/01(2).jpg',
            location: 'New York',
            rate: 455,
            rating: 4.5,
          },
          {
            name: 'New Apollo Hotel',
            imgSrc: '/assets/images/02(1).jpg',
            location: 'Califonia',
            rate: 585,
            rating: 4.8,
          },
          {
            name: 'New Age Hotel',
            imgSrc: '/assets/images/03(1).jpg',
            location: 'Los Angeles',
            rate: 385,
            rating: 4.6,
          },
          {
            name: 'Helios Beach',
            imgSrc: '/assets/images/04(1).jpg',
            location: 'Chicago',
            rate: 665,
            rating: 4.8,
          }
        ],
      };
    },
  
  };
  </script>
  <style src="../homePage-styles/featurehotels.css" scoped></style>
