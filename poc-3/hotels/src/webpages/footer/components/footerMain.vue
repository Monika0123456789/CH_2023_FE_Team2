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
            <a style=" cursor: pointer; textDecoration: none">Login as Admin</a>
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
<style scoped>
/* footer section styling begins here */
/* styling the div containing the logo and sub texts */

/* styling the entire footer */
.footer_container {
  width: 100%;
  background-color: rgb(32, 31, 31);

}

footer {
  max-width: 1320px;
  margin: auto;
  background-color: rgb(32, 31, 31);
  box-sizing: border-box;
  padding-left: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 25px;
}


.first_footer_div {
  display: flex;
  flex-direction: column;
  width: 30%;
}

/* styling the logo */
.footerlogo {
  width: 35%;
  margin-bottom: 5%;
}

.footersection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* styling the div containing set of lists */
.list_div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
}

/* styling the div containg the ul */
.list_footer {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: fit-content;
}

/* styling to remove text decoration on a tag */
footer a {
  text-decoration: none;
  color: rgb(212, 209, 209);
}

/* applying style to li tag */
footer ul li {
  list-style: none;
  line-height: 30px;
}

/* applying style to h3 tag */
footer h3 {
  color: white;
}

.footersection>p {
  color: rgb(212, 209, 209);
  margin-top: 0rem;
  margin-bottom: 0rem;
  line-height: 20px;
}

.admin_logo {
  font-size: x-large;
}

/* styling the top links div */
.footer_top_links_div {
  display: flex;
  flex-wrap: wrap;
  padding-right: 5%;
}

/* styling the h3 tag inside top links div */
#footer_top_links_h3 {
  margin-bottom: 0.5rem;
}

/* styling the a tag inside top links div */
.footer_top_links_a {
  margin-right: 25px;
  line-height: 30px;
}

/* styling the div containg payment and follow us part */
.footer_bottom_div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
}

/* styling the payment and security div */
.footer_payment_and_security_div {
  display: flex;
  gap: 3%;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
}

/* styling the payment and security icons div */
.ps_icons {
  display: flex;
  gap: 4%;
  font-size: xx-large;
}

/* styling the follow us div */
.footer_follow_us_div {
  display: flex;
  gap: 2%;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  flex-wrap: wrap;
}

/* styling the follow us icons div */
.fu_icons {
  display: flex;
  width: 100%;
  gap: 4%;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: xx-large;
}

/* styling footer copyright text */
#footer_copyright_text {
  text-align: center;
}

footer a:hover {
  text-decoration: underline;
  color: white;

}

/* footer section styling ends here */

/* footer styles for--------------- screen width less or equal to 760px ------------ */

@media screen and (max-width : 760px) {
  /* footer section styling begins here ------------------------------------*/

  footer {
    width: 100%;
    background-color: rgb(32, 31, 31);
    box-sizing: border-box;
    padding: 25px;

  }

  /* styling the div containing the logo and sub texts */
  .first_footer_div {
    width: 100%;
  }

  /* styling the div containing set of lists */
  .list_div {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1fr;
  }

  .footersection {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer ul {
    padding: 0rem;
  }

  /* styling the top links div */
  .footer_top_links_div {
    padding-right: 10px;
  }

  /* styling the a tag inside top links div */
  .footer_top_links_a {
    margin-right: 15px;
    line-height: 30px;
  }

  /* styling the div containg payment and follow us part */
  .footer_bottom_div {
    display: flex;
    gap: 10%;
    flex-direction: column;
  }

  .footer_follow_us_div {
    display: flex;
    gap: 2%;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }

  .fu_icons {
    display: flex;
    width: 100%;
    gap: 4%;
    flex-wrap: wrap;
    justify-content: flex-start;

  }

  /* footer section styling ends here ---------------------------------*/

}
</style>