<template>
  <section class="section-amenities">
    <h5>Amenities</h5>
    <div class="full-content">
      <div class="left-content">
        <div>
          <h1><font-awesome-icon :icon="['fas', 'person-biking']" />&nbsp;Activities</h1>
          <div class="activity-content" v-for="(activity, index) in activities" :key="index">
            <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;" />&nbsp;{{ activity }}
          </div>
        </div>
        <div>
          <h1><font-awesome-icon :icon="['fas', 'bell']" />&nbsp;Services</h1>
          <div class="activity-content" v-for="(service, index) in services" :key="index">
            <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;" />&nbsp;{{ service }}
          </div>
        </div>
      </div>
      <div class="right-content">
        <div>
          <h1><font-awesome-icon :icon="['fas', 'credit-card']" />&nbsp;Payment Method</h1>
          <div class="activity-content" v-for="(paymentMethod, index) in paymentMethods" :key="index">
            <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;" />&nbsp;{{ paymentMethod }}
          </div>
        </div>
        <div>
          <h1><font-awesome-icon :icon="['fas', 'shield']" />&nbsp;Safety & Security</h1>
          <div class="activity-content" v-for="(safety, index) in safetyAndSecurity" :key="index">
            <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;" />&nbsp;{{ safety }}
          </div>
        </div>
        <div>
          <h1><font-awesome-icon :icon="['fas', 'volume-high']" />&nbsp;Staff Language</h1>
          <div class="activity-content" v-for="(language, index) in staffLanguage" :key="index">
            <font-awesome-icon :icon="['fas', 'circle-check']" style="color: green;" />&nbsp;{{ language }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activities: ['Swimming pool', 'Spa', 'Kids play area', 'Gym'],
      services: ['Dry Cleaning', 'Room Service', 'Laundry facilities', 'Ironing Service', 'Lift'],
      paymentMethods: ['Credit card(Visa Master card)', 'Cash', 'Debit Card'],
      safetyAndSecurity: ['Doctor on Call'],
      staffLanguage: ['English', 'Hindi']
    };
  }
};
</script>

<style src="../hotelDetails-styles/section-3.css" scoped></style>