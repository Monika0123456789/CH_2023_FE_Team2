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
import "../footer-styles/footer.css";

export let Footer = () => {
    return <div>
        {/*Footer -------------------------Start-------------------------------------*/}
        <footer>

            {/* div representing the text and set of lists */}
            <div class="footersection">
                {/* div representing the text in the left part of the footer */}
                <div class="first-footer-div">
                    <img class="footerlogo" src="assets/images/logo-light.svg" alt="logo" />
                    <p>Departure defective arranging rapturous did we believe him all had departed</p>
                    <span style={{color:"rgb(212, 209, 209)", marginTop:"15px"}}><FaPhoneAlt style={{color: "rgb(212, 209, 209)", marginRight:"10px"}}/>+1234 568 963</span>
                    <span style={{color:"rgb(212, 209, 209)", marginTop:"10px"}}><FaEnvelope style={{color: "rgb(212, 209, 209)", marginRight:"10px"}}/>example@gmail.com</span>
                </div>
    
                <div class="list-div">
                    {/* div representing the set of lists in the right */}
                    <div class="list-footer">
                        <ul>
                            <h3>Page</h3>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">News and Blog</a></li>
                            <li><a href="#">Meet a Team</a></li>
                        </ul>
                    </div>
                    <div class="list-footer">
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
                    <div class="list-footer">
                        <ul>
                            <h3>Global Site</h3>
                            <li><a href="#">India</a></li>
                            <li><a href="#">California</a></li>
                            <li><a href="#">Indonasia</a></li>
                            <li><a href="#">Canada</a></li>
                            <li><a href="#">Malaysia</a></li>
                        </ul>
                    </div>
                    <div class="list-footer">
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
    
            
            <div class="footer-top-links-div">
                <h3 id="footer-top-links-h3">Top Links</h3>
                <a class="footer-top-links-a" href="#">Flights</a>
                <a class="footer-top-links-a" href="#">Hotels</a>
                <a class="footer-top-links-a" href="#">Tours</a>
                <a class="footer-top-links-a" href="#">Cabs</a>
                <a class="footer-top-links-a" href="#">About</a>
                <a class="footer-top-links-a" href="#">Contact us</a>
                <a class="footer-top-links-a" href="#">Blogs</a>
                <a class="footer-top-links-a" href="#">Services</a>
                <a class="footer-top-links-a" href="#">Detail Page</a>
                <a class="footer-top-links-a" href="#">Services</a>
                <a class="footer-top-links-a" href="#">Policy</a>
                <a class="footer-top-links-a" href="#">Testimonials</a>
                <a class="footer-top-links-a" href="#">Newsletters</a>
                <a class="footer-top-links-a" href="#">Podcasts</a>
                <a class="footer-top-links-a" href="#">Protests</a>
                <a class="footer-top-links-a" href="#">NewsCyber</a>
                <a class="footer-top-links-a" href="#">Education</a>
                <a class="footer-top-links-a" href="#">Sports</a>
                <a class="footer-top-links-a" href="#">Tech and Auto</a>
                <a class="footer-top-links-a" href="#">Opinion</a>
                <a class="footer-top-links-a" href="#">Share Market</a>
            </div>
    
            {/* div representing the bottom most part of the footer */}
            <div class="footer-bottom-div">
                {/* div representing the payment and security */}
                <div class="footer-payment-and-security-div">
                    <h3 id="footer-payment-and-security-h3">Payment and Security</h3>
                    <div class="ps-icons">
                        <a href="#"><FaCcPaypal style={{color: "#f0eaea"}}/></a>
                        <a href="#"><FaCcVisa /><i class="fa-brands fa-cc-visa fa-2xl" style={{ color: "#f0eaea" }}></i></a>
                        <a href="#"><FaCcMastercard style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><SiAmericanexpress style={{ color: "#f0eaea" }}/></a>
                    </div>
                </div>
    
                {/* div representing the follow us */}
                <div class="footer-follow-us-div">
                    <h3 id="footer-follow-us-h3">Follow us on</h3>
                    <div class="fu-icons">
                        <a href="#"><FaFacebook style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaInstagram style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaTwitter style={{ color: "#f0eaea" }}/></a>
                        <a href="#"><FaLinkedin style={{ color: "#f0eaea" }}/></a>
                    </div>
                </div>
            </div>
    
            <hr/>
    
            {/* copyright text goes here */}
            <h3 id="footer-copyright-text">Copyright &copy 2023 Booking. All rights reserved</h3>
        </footer>
    </div>
}