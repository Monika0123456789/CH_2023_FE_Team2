import { FaEye } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./section1.css"
export let DetailSectionOne = () => {
    return (
      <div>
        <section class="img-section">
      <h1>Courtyard by Marriott New York</h1>

      <p><FaLocationDot />&nbsp;5855 W Century Blvd, Los Angeles - 90045&nbsp;
        <a id="openMap" href="#"><FaEye /></a>
      </p>

      <div class="image-section">
        <div class="grid-content image-01"><img src="./assets/images/16.jpg" alt="hotel images"/></div>
        <div class="grid-content image-02"><img src="./assets/images/13.jpg" alt="hotel images"/></div>
        <div class="grid-content image-03"><img src="./assets/images/12(1).jpg" alt="hotel images"/></div>
        <div class="grid-content image-04">
          <img src="./assets/images/01(2).jpg" alt="hotel images"/>
          <a href="#" class="overlay-container">View all</a>
        </div>
      </div>
    </section>


  
    <div class="map-container1">
      <div id="mapPopup" class="popup">
        <h2>View Our Hotel Location<img class="close" id="closeMap" src="assets/images/close.svg" alt=""></img></h2>
        <div id="mapContainer">
      
           
        </div>
        <div class="view-map"><img src="assets/images/view-location.svg" alt=""/>&nbspView in Google Map</div>
      </div>
    </div>
   
        
      </div>
    );
  };
  