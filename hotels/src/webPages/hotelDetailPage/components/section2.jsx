import { FaBellConcierge, FaWifi } from "react-icons/fa6";
import {  FaRegSnowflake, FaSwimmingPool } from "react-icons/fa";
import "../hotel-detail-page-styles/section2.css"
export let DetailSectionTwo = () => {
    return (
        <section className="section-about">
        <h5>About This Hotel</h5>
        <h1>Main Highlights</h1>
        <div className="icons">
          <div className="image-box">
          <FaWifi />
          </div>
          <div className="image-box">
          <FaSwimmingPool />
          </div>
          <div className="image-box">
          <FaRegSnowflake />
          </div>
          <div className="image-box">
          <FaBellConcierge />
          </div>
        </div>
        <p>Demesne far-hearted suppose venture excited see had has.Dependent on so extremely delivered by.Yet no jokes
          worse her why.<b>Bad one supposing breakfast day fulfilled off depending questions</b></p>
        <p>Delivered dejection necessary objection do Mr prevailed.Mr feeling does chiefly cordial in do.Water timed fally
          right aware if oh truth.Large above be means.Dashwood does provide stronger is.</p>
        <h1>Advantages</h1>
        <div className="advantages"><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Every hotel staff to have Proper PPT kit for
          COVID-19</div>
        <div className="advantages"><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Every staff member wears face masks and gloves
          at all service times.</div>
        <div className="advantages"><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />Hotel staff ensures to maintain social
          distancing at all times.</div>
        <div className="advantages"><img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="check" />The hotel has in-Room Dining options available.
        </div>
      </section>
    );
  };
  