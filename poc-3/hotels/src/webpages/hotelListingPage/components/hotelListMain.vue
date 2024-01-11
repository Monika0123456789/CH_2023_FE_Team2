<template>
  <div class="listMain container">
    <button class="menuButton" @click="toggleFilterPopup" v-if="isMobile">
      &#9776; <!-- Unicode character for three horizontal lines -->
    </button>

    <div v-if="isFilterPopupVisible" class="popupOverlay">
      <div class="popupContent">
        <button @click="toggleFilterPopup" class="closeButton">&times;</button>
        <HotelFilteringMain />
      </div>
    </div>

    <HotelFilteringMain class="filters" v-if="!isMobile || (isMobile && !isFilterPopupVisible)" />

    <div class="hotelLists">
      <HotelList />
      
    </div>
  </div>
</template>


<script>
import HotelList from './hotelListCard.vue'
import HotelFilteringMain from './HotelFilteringmain.vue';

export default {
  components: {
    HotelList,
    HotelFilteringMain,
  },
  data() {
    return {
      filteredHotels: [],
      isMobile: window.innerWidth <= 760,
      isFilterPopupVisible: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    openHotelDetails(item) {
      this.$router.push({ name: 'hoteldetails', params: { hotelId: Number(item.id) } });
    },
    toggleFilterPopup() {
      this.isFilterPopupVisible = !this.isFilterPopupVisible;
    },
    handleWindowResize() {
      this.isMobile = window.innerWidth <= 760;
      if (this.isMobile) {
        this.isFilterPopupVisible = false;
      }
    },

  },
};
</script>

<style scoped>
.listMain {
  display: flex;
  gap: 2%;
}

.menuButton {
  width: 10%;
  position: absolute;
  right: 3%;
  top: 100px;
}

.popupOverlay {
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  
}

.popupContent {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  width: auto;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -35%);
  overflow-y: auto;
}

.closeButton {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.filters {
  margin-top:1%;
  width: 25%;
  /* overflow-y: auto;  */
  /* max-height: 80vh;  */
}

.hotelLists {
  width: 70%;
}

@media (max-width: 760px) {
  .listMain {
    flex-direction: column;
  }

  .filters,
  .hotelLists {
    width: 100%;
  }

  .menuButton {
    display: block;
  }

  .filters {
    display: none;
  }
}
</style>
