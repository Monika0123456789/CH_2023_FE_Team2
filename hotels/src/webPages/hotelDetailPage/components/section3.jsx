
import "./section3.css"
import { IoMdBicycle } from "react-icons/io";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";


export let DetailSectionThree = () => {
    return (
        <section className="section-amenities">
        <h5>Amenities</h5>
        <div className="full-content">
          <div className="left-content">
            <div>
              <h1><IoMdBicycle />Activities</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Swimming pool</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>spa</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Kids play area</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Gym</div>
            </div>
            <div>
              <h1><FaBellConcierge />Services</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Dry Cleaning</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Room Service</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Laundry facilities</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Ironing Service</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Lift</div>
            </div>
          </div>
          <div className="right-content">
            <div>
              <h1><MdOutlinePayment />Payment Method</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Credit card(Visa Master card)</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Cash</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Debit Card</div>
            </div>
            <div>
              <h1><MdOutlineSecurity />Safty & security</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Doctor on Cell</div>
            </div>
            <div>
              <h1><HiSpeakerWave />Staff Language</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>English</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/>Hindi</div>
            </div>
          </div>
        </div>
  
      </section>
    );
  };
  