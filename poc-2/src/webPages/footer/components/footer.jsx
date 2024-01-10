import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import style from "../footer-styles/footer.module.css";
import { useNavigate } from "react-router-dom";

export let Footer = () => {
    let navigate = useNavigate();
    return <div className={style.footer_container}>
        {/*Footer -------------------------Start-------------------------------------*/}
        <footer>

            {/* div representing the text and set of lists */}
            <div className={style.footersection}>
                {/* div representing the text in the left part of the footer */}
                <div className={style.first_footer_div}>
                    <img className={style.footerlogo} src={process.env.PUBLIC_URL + '/assets/images/logo-light.svg'} alt="hotel images" />

                   
                    <p>Departure defective arranging rapturous did we believe him all had departed</p>
                    <span style={{color:"rgb(212, 209, 209)", marginTop:"15px"}}><FaPhoneAlt style={{color: "rgb(212, 209, 209)", marginRight:"10px"}}/>+1234 568 963</span>
                    <span style={{color:"rgb(212, 209, 209)", marginTop:"10px"}}><FaEnvelope style={{color: "rgb(212, 209, 209)", marginRight:"10px"}}/>example@gmail.com</span>
                    <span style={{color:"rgb(212, 209, 209)", marginTop:"10px"}}><MdAdminPanelSettings style={{color: "rgb(212, 209, 209)", marginRight:"10px"}} className={style.admin_logo}/><a onClick={()=>{navigate('/adminlogin')}} style={{cursor:"pointer", textDecoration:"none"}}>Login as Admin</a></span>
                </div>
    
                <div className={style.list_div}>
                    {/* div representing the set of lists in the right */}
                    <div className={style.list_footer}>
                        <ul>
                            <h3>Page</h3>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">News and Blog</a></li>
                            <li><a href="#">Meet a Team</a></li>
                        </ul>
                    </div>
                    <div className={style.list_footer}>
                        <ul>
                            <h3>Link</h3>
                            <li><a href="#">Sign up</a></li>
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Cookie</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className={style.list_footer}>
                        <ul>
                            <h3>Global Site</h3>
                            <li><a href="#">India</a></li>
                            <li><a href="#">California</a></li>
                            <li><a href="#">Indonasia</a></li>
                            <li><a href="#">Canada</a></li>
                            <li><a href="#">Malaysia</a></li>
                        </ul>
                    </div>
                    <div className={style.list_footer}>
                        <ul>
                            <h3>Booking</h3>
                            <li><FaHotel style={{color: "rgb(212, 209, 209)", marginRight:"10px"}}/><a href="#">Hotel</a></li>
                            <li><MdFlight style={{color:"rgb(212, 209, 209)", marginRight: "10px"}}/><a href="#">Flight</a></li>
                            <li><FaGlobeAmericas style={{color:"rgb(212, 209, 209)", marginRight: "10px"}}/><a href="#">Tour</a></li>
                            <li><FaTaxi style={{color:"rgb(212, 209, 209)", marginRight: "10px"}}/><a href="#">Cabs</a></li>
                        </ul>
                    </div>
                </div>
    
            </div>
    
            <h3 id="footer_top_links_h3">Top Links</h3>
            <div className={style.footer_top_links_div}>
                <a className={style.footer_top_links_a} href="#">Flights</a>
                <a className={style.footer_top_links_a} href="#">Hotels</a>
                <a className={style.footer_top_links_a} href="#">Tours</a>
                <a className={style.footer_top_links_a} href="#">Cabs</a>
                <a className={style.footer_top_links_a} href="#">About</a>
                <a className={style.footer_top_links_a} href="#">Contact us</a>
                <a className={style.footer_top_links_a} href="#">Blogs</a>
                <a className={style.footer_top_links_a} href="#">Services</a>
                <a className={style.footer_top_links_a} href="#">Detail Page</a>
                <a className={style.footer_top_links_a} href="#">Services</a>
                <a className={style.footer_top_links_a} href="#">Policy</a>
                <a className={style.footer_top_links_a} href="#">Testimonials</a>
                <a className={style.footer_top_links_a} href="#">Newsletters</a>
                <a className={style.footer_top_links_a} href="#">Podcasts</a>
                <a className={style.footer_top_links_a} href="#">Protests</a>
                <a className={style.footer_top_links_a} href="#">NewsCyber</a>
                <a className={style.footer_top_links_a} href="#">Education</a>
                <a className={style.footer_top_links_a} href="#">Sports</a>
                <a className={style.footer_top_links_a} href="#">Tech and Auto</a>
                <a className={style.footer_top_links_a} href="#">Opinion</a>
                <a className={style.footer_top_links_a} href="#">Share Market</a>
            </div>
    
            {/* div representing the bottom most part of the footer */}
            <div className={style.footer_bottom_div}>
                {/* div representing the payment and security */}
                <div className={style.footer_payment_and_security_div}>
                    <h3 id={style.footer_payment_and_security_h3}>Payment and Security</h3>
                    <div className={style.ps_icons}>
                        <a href="#"><FaCcPaypal style={{color: "#f0eaea"}}/></a>
                        <a href="#"><FaCcVisa style={{color: "#f0eaea"}}/></a>
                        <a href="#"><FaCcMastercard style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><SiAmericanexpress style={{ color: "#f0eaea" }}/></a>
                    </div>
                </div>
    
                {/* div representing the follow us */}
                <div className={style.footer_follow_us_div}>
                    <h3 id={style.footer_follow_us_h3}>Follow us on</h3>
                    <div className={style.fu_icons}>
                        <a href="#"><FaFacebook style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaInstagram style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaTwitter style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaLinkedin style={{ color: "#f0eaea" }}/></a>
                    </div>
                </div>
            </div>
    
            <hr/>
    
            {/* copyright text goes here */}
            <h3 id={style.footer_copyright_text}>Copyright &copy; 2023 Booking. All rights reserved</h3>
        </footer>
    </div>
}