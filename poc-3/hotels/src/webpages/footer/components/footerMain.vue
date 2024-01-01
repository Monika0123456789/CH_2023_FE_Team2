<template>
  <div class="footer_container">
    <!-- Footer -------------------------Start------------------------------------- -->
    <footer>

      <!--  div representing the text and set of lists  -->
      <div class="footersection">
        <!--  div representing the text in the left part of the footer  -->
        <div class="first_footer_div">
          <img class="footerlogo" src="/assets/images/logo-light.svg" alt="hotel images" />


          <p>Departure defective arranging rapturous did we believe him all had departed</p>
          <span style="color:rgb(212, 209, 209); margin-top:15px">
            <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px" icon="fa-solid fa-phone" />+1234 568
            963
          </span>
          <span style="color:rgb(212, 209, 209); margin-top:10px">
            <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px"
              icon="fa-solid fa-envelope" />example@gmail.com
          </span>
          <span style="color:rgb(212, 209, 209); margin-top:10px">
            <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px" icon="fa-solid fa-user-shield" />
            <router-link to="/adminLogin" onclick="window.scrollTo(0, 0)">
              <a style=" cursor: pointer; textDecoration: none">Login as Admin</a>
            </router-link>
          </span>
        </div>

        <div class="list_div">
          <!--  div representing the set of lists in the right  -->
          <div class="list_footer">
            <ul>
              <h3>Page</h3>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">News and Blog</a></li>
              <li><a href="#">Meet a Team</a></li>
            </ul>
          </div>
          <div class="list_footer">
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
          <div class="list_footer">
            <ul>
              <h3>Global Site</h3>
              <li><a href="#">India</a></li>
              <li><a href="#">California</a></li>
              <li><a href="#">Indonasia</a></li>
              <li><a href="#">Canada</a></li>
              <li><a href="#">Malaysia</a></li>
            </ul>
          </div>
          <div class="list_footer">
            <ul>
              <h3>Booking</h3>
              <li>
                <font-awesome-icon style="color: rgb(212, 209, 209); margin-right:10px" icon="fa-solid fa-hotel" /><a
                  href="#">Hotel</a>
              </li>
              <li>
                <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px" icon="fa-solid fa-plane" /><a
                  href="#">Flight</a>
              </li>
              <li>
                <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px" icon="fa-solid fa-earth-asia" /><a
                  href="#">Tour</a>
              </li>
              <li>
                <font-awesome-icon style="color:rgb(212, 209, 209); margin-right: 10px" icon="fa-solid fa-taxi" /><a
                  href="#">Cabs</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <h3 id="footer_top_links_h3">Top Links</h3>
      <div class="footer_top_links_div">
        <a class="footer_top_links_a" href="#">Flights</a>
        <a class="footer_top_links_a" href="#">Hotels</a>
        <a class="footer_top_links_a" href="#">Tours</a>
        <a class="footer_top_links_a" href="#">Cabs</a>
        <a class="footer_top_links_a" href="#">About</a>
        <a class="footer_top_links_a" href="#">Contact us</a>
        <a class="footer_top_links_a" href="#">Blogs</a>
        <a class="footer_top_links_a" href="#">Services</a>
        <a class="footer_top_links_a" href="#">Detail Page</a>
        <a class="footer_top_links_a" href="#">Services</a>
        <a class="footer_top_links_a" href="#">Policy</a>
        <a class="footer_top_links_a" href="#">Testimonials</a>
        <a class="footer_top_links_a" href="#">Newsletters</a>
        <a class="footer_top_links_a" href="#">Podcasts</a>
        <a class="footer_top_links_a" href="#">Protests</a>
        <a class="footer_top_links_a" href="#">NewsCyber</a>
        <a class="footer_top_links_a" href="#">Education</a>
        <a class="footer_top_links_a" href="#">Sports</a>
        <a class="footer_top_links_a" href="#">Tech and Auto</a>
        <a class="footer_top_links_a" href="#">Opinion</a>
        <a class="footer_top_links_a" href="#">Share Market</a>
      </div>

      <!--  div representing the bottom most part of the footer  -->
      <div class="footer_bottom_div">
        <!--  div representing the payment and security  -->
        <div class="footer_payment_and_security_div">
          <h3 id="style.footer_payment_and_security_h3">Payment and Security</h3>
          <div class="ps_icons">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-cc-paypal" />
            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-cc-visa" />

            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-cc-mastercard" />

            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-cc-apple-pay" />
            </a>
          </div>
        </div>

        <!--  div representing the follow us  -->
        <div class="footer_follow_us_div">
          <h3 id="style.footer_follow_us_h3">Follow us on</h3>
          <div class="fu_icons">
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <!--  copyright text goes here  -->
      <h3 id="footer_copyright_text">Copyright &copy; 2023 Booking. All rights reserved</h3>
    </footer>
  </div>
</template>
<script>

export default {
  components: {
  }
}
</script>
<style src="../footerStyles/footerStyles.css" scoped></style>