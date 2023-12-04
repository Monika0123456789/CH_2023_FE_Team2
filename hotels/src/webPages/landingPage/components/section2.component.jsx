
import "../landing-page-styles/section2.css"
import { FaBolt, FaStopwatch, FaShield, FaUtensils, FaStar } from "react-icons/fa6";

export let Section2 = () => {
  return <>
  <section className="section2">
      <div className="section2-div left-image">
          <img className="adImage" src="./assets/images/01(1).jpg" alt="ADVERISEMENTS"/>
          <img className="star-top" src="./assets/images/starTop1.svg" alt="starImage"/>

          <div className="likes-display">
              <div className="outer-image">
                  <img src="./assets/images/01.svg" alt="like"/>
              </div>
              <div className="client-rating-display">
                  <div className="client-images">
                      <h3>Client</h3>
                      <div className="inner-images">
                          <img src="./assets/images/01.jpg" alt="image01"/>
                          <img src="./assets/images/02.jpg" alt="image02"/>
                          <img src="./assets/images/03.jpg" alt="image03"/>
                          <img src="./assets/images/04.jpg" alt="image04"/>
                      </div>
                  </div>
                  <div className="ratings">
                      <h3>Rating</h3>
                      <p>4.5 
                        <FaStar className="star"/>
                        </p>
                  </div>
              </div>
          </div>
      </div>
      <div className="section2-div right-content">
          <h1>The Best Holidays Start Here!</h1>
          <p>Book your hotel with us and don't forget to grab an awesome hotel deals to save a massive on your
              stay.
          </p>
          <div className="section_2 inner-grid-container">
              <div className="grid-content">

                  <i className="fa-solid fa-utensils">
                    <FaUtensils/>
                  </i>
                  <h3>Quality Food</h3>
                  <p>
                      Departure defective arranging rapturous did. Conduct denied adding worthy little.
                  </p>
              </div>
              <div className="grid-content">

                      <i className="fa-solid fa-stopwatch">
                        <FaStopwatch/>
                      </i>
                      <h3>Quick Services</h3>
                  
                      <p>
                          Supposing so be resolving breakfast am or perfectly.
                      </p>
                 

              </div>
              <div className="grid-content">

                  <i className="fa-solid fa-shield">
                    <FaShield/>
                  </i>
                  <h3>High Security</h3>

                  <p>
                      Arranging rapturous did believe him all had supported.
                  </p>
              </div>
              <div className="grid-content">

                  <i className="fa-solid fa-bolt">
                    < FaBolt />
                  </i>
                  <h3>24 Hours Alert</h3>
                  <p>
                      Rapturous did believe him all had supported.
                  </p>
              </div>
          </div>

      </div>
  </section>
  
  </>
}