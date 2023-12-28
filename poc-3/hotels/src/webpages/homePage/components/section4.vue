<template>
  <div>
    <Testimonial :testimonial="testimonial1" v-show="currentTestimonial === 1" />
    <Testimonial :testimonial="testimonial2" v-show="currentTestimonial === 2" />
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

    // Functionalities to be implemented upon loading of the application
    onMounted(() => {
      // Keep the testimonial2 hidden upon loading of the application
      currentTestimonial.value = 1;

      // Invoking the toggleSection() every 4 seconds after every 2 seconds
      setInterval(() => {
        setTimeout(() => {
          toggleSection();
        }, 2000);
      }, 4000);
    });

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

    return {
      testimonial1,
      testimonial2,
      currentTestimonial,
    };
  },
};
</script>

<style>
/* Section 4 Styling --------------------------Starts Here--------------------------------------- */
/* section4 testimonials section styling */

/* section4 testimonial-1 and testimonial-2 begins */
/* section4 containing testimonials */
/* section4 testimonial-1 begins */
.section4_section{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-basis: 50%;
    margin:50px auto;
    align-items: center;
    gap:5%;
}

.section4_left_img_div{
    width:50%;
    flex-basis: 50%;
    display: flex;
    flex-flow: wrap;
    justify-content: right;
}

/* testimonial image styling */
.section4_left_img{
    width:60%;
    border-radius: 5%;
    position:relative;
}

/* left division sub image div styling */
.section4_left_sub_img_div{
    width:35px;
    height:35px;
    position: relative;
    left: 1.5rem;
    top:2rem;
    border:none;
    z-index:2;
    border-radius:5px;
    padding:1%;
    background-color: orange;
}


/* testimonial right div element styling */
.section4_right_text_div{
    width:50%;
}

/* testimonial right div element paragraph styling */
.section4_right_text_div_p{
    line-height: 20px;
    font-size: 15px;
    color:black;
}

/* star icon styling */
.rating_star{
    width:15px;
    color : #FDCC0D;
}

/* double quote icon styling */
.double-quote{
    width:30px;
    margin-left: 4%;
}

/* customer occupation styling */
.section4_customer_occupation{
    color:rgb(158, 154, 154);
    margin-top:0rem;
    margin-bottom:0rem;
    font-size: 11px;
}

/* customer name sytling */
.section4_customer_name{
    margin-top:0rem;
    margin-bottom:0rem;
    font-size: 12px;
    color:black;
}

/* third paragraph in right div styling for testimonial-1*/
#section4_right_text_div_p3_1{
    margin-bottom: 0.5rem;
}
/* section4 testimonial-1 ends */



/* section4 testimonial-2 begins */
/* third paragraph in right div styling for testimonial-2*/
#section4_right_text_div_p3_2{
    margin-bottom: 0.5rem;
}
/* section4 testimonial-2 ends */

/* section4 testimonial-1 and testimonial-2 ends */
/* Section 4 Styling --------------------------Ends Here--------------------------------------- */

@media screen and (max-width: 760px) {
    /* Media Queries for Section 1 (for devices with 760px or lesser screen size)
    /* Section 4 mobile view styles --------------Starts----------------------- */

  /* section4 testimonials section styling */

/* section4 testimonial-1 and testimonial-2 begins */
/* section4 containing testimonials */
/* section4 testimonial-1 begins */
.section4_section{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:20x auto;
  }
  
  /* styling the parent of the left images */
  .section4_left_img_div{
    position: relative;
  }
  
  /* testimonial image styling */
  .section4_left_img{
    width: 100%;
    height:100%;
    border-radius: 5%;    
    margin-left:0.5rem;
  }
  
  /* left division sub image div styling */
  .section4_left_sub_img_div{
    width:3rem;
    height:3rem;
    position: absolute;
    left: -2rem;
    top:2rem;
    border:none;
    z-index:2;
    border-radius:5px;
    padding:1%;
    background-color: orange;
  }
  
  /* testimonial right div element styling */
  .section4_right_text_div{
    margin-left:3%;
    margin-top:0.5rem;
  }
  
  /* third paragraph in right div styling for testimonial-1*/
  #section4_right_text_div_p3_1{
    margin-bottom: 1rem;
  }
  
  /* customer name sytling */
  .section4_customer_name{
    margin-top:0.5rem;
    margin-bottom:0rem;
    font-size: 12px;
    color: black;
  }
  
  /* customer occupation styling */
  .section4_customer_occupation{
    color:rgb(158, 154, 154);
    margin-top:0.3rem;
    margin-bottom:0rem;
    font-size: 11px;
  }
  
  /* double quote icon styling */
  .double-quote{
    width:30px;
    margin-left: 2%;
  }
  
  /* testimonial right div element paragraph styling */
  .section4_right_text_div_p{
    /* line-height: 90%; */
    font-size: 1rem;
    width:100%;
  }
  /* section4 testimonial-1 ends */
  
  
  
  /* section4 testimonial-2 begins */
  /* third paragraph in right div styling for testimonial-2*/
  #section4_right_text_div_p3_2{
    margin-bottom: 1rem;
  }
  /* section4 testimonial-2 ends */
  
  /* section4 testimonial-1 and testimonial-2 ends */
  /* Section 4 mobile view styles --------------Ends----------------------- */
}
</style>
