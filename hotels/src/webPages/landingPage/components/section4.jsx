import { useEffect } from "react"
import { Testimonial } from "./testimonial";
import $ from "jquery";

export let Section4 = () => {

    // functionalities to be implemented upon loading of the application
    useEffect(() => {
        // keep the testimonial2 hidden upon loading of the application
        $("#section4_testimonial2").hide();

        // invoking the toggleSection()  every 4 seconds after every 2 seconds
        setInterval(() => {
            setTimeout(() => {
                toggleSection();
            },2000);
        },4000);
    })

    // function to toggle between the testimonials
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
    
    // objects to store the testimonials data to be passed on to the component
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