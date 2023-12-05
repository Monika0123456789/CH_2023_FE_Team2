import "../hotel-detail-page-styles/section5.css"

export let DetailSectionFive = () => {
  return (
    <div className="hotel-policies-maincontainer">
    
      <div className="room-options-heading-div">
        <h1>Hotel Policies</h1>
        <hr/>
      </div>

      <div className="hotel-options-content">
        <p>
        <img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="hotel images" />
          &nbsp; Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a
          mess
          or ruckus at the house.</p>
        <p>
        <img src={process.env.PUBLIC_URL + '/assets/images/check.svg'} alt="hotel images" />

          &nbsp; Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.
        </p>
      </div>
    </div>
  );
};



