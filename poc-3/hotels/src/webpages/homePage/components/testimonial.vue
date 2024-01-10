<template>
  <div>
    <section :id="testimonial.section4_testimonial_id" class="section4_section">
      <!-- section4 left division containing image -->
      <div class="section4_left_img_div">
        <div class="section4_left_sub_img_div">
          <img :src="testimonial.section4_left_sub_img" alt="section4_left_sub_img" class="section4_left_sub_img" />
        </div>
        <img :src="testimonial.section4_left_img_1" alt="section4_left_img_1" class="section4_left_img" />
      </div>

      <!-- section4 right division containing text -->
      <div class="section4_right_text_div">
        <img src="/assets/images/double-quote.png" alt="double-quote" class="double-quote" />

        <p class="section4_right_text_div_p" id="section4_right_text_div_p3_1">
          Passage its ten led hearted removal cordial. preference any astonished unreserved Mrs.Understood the preference
          unreserved.
        </p>

        <!-- user ratings -->
        <font-awesome-icon class="rating_star" icon="fa-solid fa-star" />
        <font-awesome-icon class="rating_star" icon="fa-solid fa-star" />
        <font-awesome-icon class="rating_star" icon="fa-solid fa-star" />
        <font-awesome-icon class="rating_star" icon="fa-solid fa-star" />
        <font-awesome-icon class="rating_star" icon="fa-solid fa-star-half-stroke" />

        <!-- user name and occupation -->
        <b>
          <p class="section4_customer_name">{{ testimonial.section4_customer_name }}</p>
        </b>
        <p class="section4_customer_occupation">occupation</p>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  props: {
    testimonial: Object,
  },
  components: {

  },
};
</script>

<style src="../homePage-styles/section4.css" scoped></style>
