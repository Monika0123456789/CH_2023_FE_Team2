<template>
    <section class="section2">
    <!-- left division to contain the image and client ratings -->
      <div class="section2-div left-image">
          <img class="adImage" src="/assets/images/01(1).jpg" alt="ADVERISEMENTS"/>
          <img class="star-top" src="/assets/images/starTop1.svg" alt="starImage"/>

          <div class="likes-display">
              <div class="outer-image">
                  <img src="/assets/images/01.svg" alt="like"/>
              </div>
              <div class="client-rating-display">
                  <div class="client-images">
                      <h3>Client</h3>
                      <div class="inner-images">
                          <img src="/assets/images/01.jpg" alt="image01"/>
                          <img src="/assets/images/02.jpg" alt="image02"/>
                          <img src="/assets/images/03.jpg" alt="image03"/>
                          <img src="/assets/images/04.jpg" alt="image04"/>
                      </div>
                  </div>
                  <div class="ratings">
                      <h3>Rating</h3>
                      <p>4.5 
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffdf00"/>
                        </p>
                  </div>
              </div>
          </div>
      </div>

      <!-- right div contain the text icons and services provided by the listed hotels -->
      <div class="section2-div right-content">
          <h1>The Best Holidays Start Here!</h1>
          <p>Book your hotel with us and don't forget to grab an awesome hotel deals to save a massive on your
              stay.
          </p>
          <div class="section_2 inner-grid-container">
              <div class="grid-content">

                  <i class="fa-solid fa-utensils">
                    <font-awesome-icon :icon="['fas', 'utensils']"/>
                  </i>
                  <h3>Quality Food</h3>
                  <p>
                      Departure defective arranging rapturous did. Conduct denied adding worthy little.
                  </p>
              </div>
              <div class="grid-content">
                      <i class="fa-solid fa-stopwatch">
                        <font-awesome-icon :icon="['fas', 'stopwatch']" />
                      </i>
                      <h3>Quick Services</h3>
                     <p>
                          Supposing so be resolving breakfast am or perfectly.
                      </p>
              </div>

              <div class="grid-content">
                 <i class="fa-solid fa-shield">
                    <font-awesome-icon :icon="['fas', 'shield']" />
                </i>               
                <h3>High Security</h3>
                  <p>
                      Arranging rapturous did believe him all had supported.
                  </p>
              </div>

              <div class="grid-content">
                  <i class="fa-solid fa-bolt">
                    <font-awesome-icon :icon="['fas', 'bolt']" class="bolt"/>
                  </i>
                  <h3>24 Hours Alert</h3>
                  <p>
                      Rapturous did believe him all had supported.
                  </p>
              </div>
          </div>

      </div>
  </section>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style src="../homePage-styles/section2.css" scoped></style>