import { Testimonial } from "./testimonial"
import "../landing-page-js/section4.js";

export let Section4 = () => {
    
    let testimonial1 = { 
        section4_testimonial_id : "section4_testimonial1",
        section4_left_sub_img : "./assets/images/03.svg",
        section4_left_img_1 : "./assets/images/02(2).jpg",
        section4_customer_name : "Carolyn Ortiz"
     }

     let testimonial2 = {
        section4_testimonial_id : "section4_testimonial2",
        section4_left_sub_img : "./assets/images/02.svg",
        section4_left_img_1 : "./assets/images/01(3).jpg",
        section4_customer_name : "Billy Vasquez"
     }

    return <div>
        <Testimonial testimonial = {testimonial1} />
        <Testimonial testimonial = {testimonial2} />
    </div>
}