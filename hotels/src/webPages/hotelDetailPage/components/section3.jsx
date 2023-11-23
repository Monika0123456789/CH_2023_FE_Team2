
import "./section3.css"
import { IoMdBicycle } from "react-icons/io";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";


export let DetailSectionThree = () => {
    return (
        <section class="section-amenities">
        <h5>Amenities</h5>
        <div class="full-content">
          <div class="left-content">
            <div>
              <h1><IoMdBicycle />Activities</h1>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Swimming pool</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>spa</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Kids play area</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Gym</div>
            </div>
            <div>
              <h1><FaBellConcierge />Services</h1>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Dry Cleaning</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Room Service</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Laundry facilities</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Ironing Service</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Lift</div>
            </div>
          </div>
          <div class="right-content">
            <div>
              <h1><MdOutlinePayment />Payment Method</h1>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Credit card(Visa Master card)</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Cash</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Debit Card</div>
            </div>
            <div>
              <h1><MdOutlineSecurity />Safty & security</h1>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Doctor on Cell</div>
            </div>
            <div>
              <h1><HiSpeakerWave />Staff Language</h1>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>English</div>
              <div class="activity-content"><img src="assets/images/check.svg" alt=""/>Hindi</div>
            </div>
          </div>
        </div>
  
      </section>
    );
  };
  