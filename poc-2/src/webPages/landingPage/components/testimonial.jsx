 // import the css file
import "../landing-page-styles/section4.css";

// import the react icons
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export let Testimonial = (props) => {
    // section4 testimonial begins
    return <div>
                <section className="section4_section" id={ props.testimonial.section4_testimonial_id }>

                    {/* section4 left division containing image */}
                    <div className="section4_left_img_div">
                        <div className="section4_left_sub_img_div">
                            <img src={props.testimonial.section4_left_sub_img} alt="section4_left_sub_img" className="section4_left_sub_img" />
                        </div>
                        <img src={ props.testimonial.section4_left_img_1 } alt="section4_left_img_1" className="section4_left_img" />
                    </div>

                    {/* section4 right division containig text */}
                    <div className="section4_right_text_div">
                        <img src="./assets/images/double-quote.png" alt="double-quote" className="double-quote" />

                        <p className="section4_right_text_div_p" id="section4_right_text_div_p3_1">Passage its ten led hearted
                        removal cordial.
                        preference any astonished unreserved Mrs.Understood the preference
                        unreserved.</p>

                        {/* user ratings */}
                        <FaStar className="rating_star"/>
                        <FaStar className="rating_star"/>
                        <FaStar className="rating_star"/>
                        <FaStar className="rating_star"/>
                        <FaStarHalfAlt className="rating_star"/>

                        {/* user name and occupation */}
                        <b>
                            <p className="section4_customer_name">{ props.testimonial.section4_customer_name }</p>
                        </b>    
                        <p className="section4_customer_occupation">occupation</p>
                    </div>
                </section>
    </div>
}