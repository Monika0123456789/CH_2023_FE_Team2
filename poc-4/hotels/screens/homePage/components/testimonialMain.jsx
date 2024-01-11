
import { useEffect, useState } from "react";
import {Testimonial} from "./testimonial.jsx"

export let TestimonialMain = () => {

    const [showCompA, setShowCompA] = useState(true);

    useEffect(() => {
        // invoking the toggleSection()  every 4 seconds after every 2 seconds
        const timer = setInterval(() => {
            setTimeout(() => {
                setShowCompA((prev) => !prev)
            },2000);
        },4000);
        return () => {
            clearInterval(timer);
          };
    })


    let testimonial1 = {
        section4_testimonial_id : "section4_testimonial1",
        section4_left_sub_img : "./assets/images/03.svg",
        section4_left_img_1 : require("../../../assets/images/02(2).jpg"),
        section4_customer_name : "Carolyn Ortiz"
    }

    let testimonial2 = {
        section4_testimonial_id : "section4_testimonial2",
        section4_left_sub_img : "./assets/images/02.svg",
        section4_left_img_1 : require("../../../assets/images/01(3).jpg"),
        section4_customer_name : "Billy Vasquez"
     }

    return(
        <>
            {showCompA ? <Testimonial testimonial = {testimonial1}/> : <Testimonial testimonial = {testimonial2}/>}
        </>
    )
}