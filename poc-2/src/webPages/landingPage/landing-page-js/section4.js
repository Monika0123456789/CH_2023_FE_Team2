// function to toggle between the two user testimonials
import $ from "jquery";

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

// using jquery to implement the toggle functionality
$(() => {
    $("#section4_testimonial2").hide();
    setInterval(() => {
        setTimeout(() => {
            toggleSection();
        },5000);
    },5000);
})




