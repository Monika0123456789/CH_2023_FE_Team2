import "../landing-page-styles/section1.css";
// import { NavLink } from "react-router-dom";

export let SectionOneComp = () => {
    return (
      
    <section className="section-1">
      <div className="section1_parent-div">
                <h1>Find the top Hotels nearby.</h1>
                <p>We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</p>
                <br/>

                <button id="discoverbutton" onClick={()=>{'hotelListingPageMain.jsx'}}>Discover
                    Now</button>
                
      </div>
      <div className="section1_parent-div section1-ParentImage">
                <img id="section1_image" src="./assets/images/06.jpg" alt="image"/>
                <img className="leaves-image" src="./assets/images/yellowleaf.svg" alt="image"/>
                <div className="support">
                    <img src="./assets/images/headphone.svg" alt=""/>
                    <h2>24/7</h2>
                    <p>Guide Supports</p>
                </div>
                <div className="section1-innerimage">
                    <img src="./assets/images/12.jpg" alt="hotel"/>
                    <img src="./assets/images/12.jpg" alt="hotel"/>
                </div>

            </div>
        
        

      </section>
        
        
      
    );
  };

