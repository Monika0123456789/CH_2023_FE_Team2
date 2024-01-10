
import "../hotel-detail-page-styles/section3.css"
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
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Swimming pool</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />spa</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Kids play area</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Gym</div>
            </div>
            <div>
              <h1><FaBellConcierge />Services</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Dry Cleaning</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Room Service</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Laundry facilities</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Ironing Service</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Lift</div>
            </div>
          </div>
          <div className="right-content">
            <div>
              <h1><MdOutlinePayment />Payment Method</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Credit card(Visa Master card)</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Cash</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Debit Card</div>
            </div>
            <div>
              <h1><MdOutlineSecurity />Safty & security</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Doctor on Cell</div>
            </div>
            <div>
              <h1><HiSpeakerWave />Staff Language</h1>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />English</div>
              <div className="activity-content"><img src="assets/images/check.svg" alt=""/><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Hindi</div>
            </div>
          </div>
        </div>
  
      </section>
    );
  };
  