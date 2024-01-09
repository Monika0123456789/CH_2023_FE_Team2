  <template>
    <section class="section-1">
      <div class="section1_parent-div">
        <h1>Find the top Hotels nearby.</h1>
        <p>We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</p>
        <!-- Router Link to Hotel Listing Page -->
        <router-link to="/hotellisting">
        <button onclick="window.scrollTo(0, 0);" id="discoverbutton">Discover Now</button>
        </router-link>
      </div>
      <div class="section1_parent-div section1-ParentImage">
        <img id="section1_image" src="/assets/images/06.jpg" alt="image" />
        <img class="leaves-image" src="/assets/images/yellowleaf.svg" alt="image" />
        <div class="support">
          <img src="/assets/images/headphone.svg" alt="" />
          <h2>24/7</h2>
          <p>Guide Supports</p>
        </div>
        <div class="section1-innerimage">
          <img src="/assets/images/12.jpg" alt="hotel" />
          <img src="/assets/images/12.jpg" alt="hotel" />
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {

  };
  </script>

  <style src="../homePage-styles/section-1.css" scoped></style>

