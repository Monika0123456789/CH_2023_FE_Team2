import { useEffect } from "react"
import { Testimonial } from "./testimonial";
import $ from "jquery";
// import "../landing-page-js/section4.js";

export let Section4 = () => {

    useEffect(() => {
        $("#section4_testimonial2").hide();
        setInterval(() => {
            setTimeout(() => {
                toggleSection();
            },2000);
        },4000);
    })

    function toggleSection(){
        if(!($("#section4_testimonial1").is(":hidden")) && $("#section4_testimonial2").is(":hidden")){
            $("#section4_testimonial1").hide();
            $("#section4_testimonial2").show();
        }
        else if(!($("#section4_testimonial2").is(":hidden")) && $("#section4_testimonial1").is(":hidden")){
            $("#section4_testimonial2").hide();
            $("#section4_testimonial1").show();
        }
    }
    
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