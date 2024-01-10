<template>
  <div>
    <!-- <Testimonial :testimonial="testimonial1" v-show="currentTestimonial === 1" />
    <Testimonial :testimonial="testimonial2" v-show="currentTestimonial === 2" /> -->
    <Testimonial :testimonial="currentTestimonialData" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Testimonial from "./testimonial.vue"; // Assuming Testimonial.vue file is in the same directory

export default {
  components: {
    Testimonial,
  },
  setup() {
    const currentTestimonial = ref(1);

    // Function to toggle between the testimonials
    const toggleSection = () => {
      currentTestimonial.value = currentTestimonial.value === 1 ? 2 : 1;
    };

    // Objects to store the testimonials data to be passed on to the component
    const testimonial1 = {
      section4_testimonial_id: "section4_testimonial1",
      section4_left_sub_img: "./assets/images/03.svg",
      section4_left_img_1: "./assets/images/02(2).jpg",
      section4_customer_name: "Carolyn Ortiz",
    };

    const testimonial2 = {
      section4_testimonial_id: "section4_testimonial2",
      section4_left_sub_img: "./assets/images/02.svg",
      section4_left_img_1: "./assets/images/01(3).jpg",
      section4_customer_name: "Billy Vasquez",
    };
    // Compute the currentTestimonialData dynamically based on currentTestimonial value
    const currentTestimonialData = ref(testimonial1);

    // Functionalities to be implemented upon loading of the application
    onMounted(() => {
      // Keep the testimonial2 hidden upon loading of the application
      currentTestimonial.value = 1;

      // Invoking the toggleSection() every 4 seconds
      setInterval(() => {
        toggleSection();
        // Update currentTestimonialData when toggling
        currentTestimonialData.value = currentTestimonial.value === 1 ? testimonial1 : testimonial2;
      }, 4000);
    });

    return {
      currentTestimonialData,
    };
  },
};
</script>
<style src="../homePage-styles/section4.css" scoped></style>
