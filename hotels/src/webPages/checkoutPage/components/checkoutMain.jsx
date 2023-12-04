import { CheckInCheckOut } from "./checkinCheckoutComponent";
import { RoomComponent } from "./roomComponent";
import { UserCredentialsComponent } from "./userCredentialsComponent";
import style from "../checkout-page-styles/checkoutMain.module.css";
import dataStore from "../store";
import { SummaryComponent } from "./summaryComponent";
import { Footer } from "../../footer/components/footer";
import commonStyle from "../../common.module.css"
import { useNavigate } from "react-router";

export let CheckoutMain = () => {
  const navigate = useNavigate();
  let storeData = () => {
    const isUserDataValid = validateUserData(["address"]);

    if (!isUserDataValid) {
      alert("You must fill in all required fields .");
      return;
    }
    const data = dataStore.getState();

    const existingDataString = localStorage.getItem("Booking Details");

    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : { bookingData: [] };

    const bookingId = Date.now();
    const newBooking = {
      id: bookingId,
      data,
    };

    const mergedData = {
      ...existingData,
      bookingData: [...existingData.bookingData, newBooking],
    };

    localStorage.setItem("Booking Details", JSON.stringify(mergedData));
    
    alert("your booking is confirmed")
    navigate(`/`)
  };
  const validateUserData = (excludeFields = []) => {
    const requiredFields = [
      "fullName",
      "email",
      "mobileNumber",
      "dateOfBirth",
      "gender",
      "checkin",
      "checkout",
    ];
    const userData = dataStore.getState();
    for (const field of requiredFields) {
      if (!excludeFields.includes(field) && !userData[field]) {
        return false;
      }
    }

    return true;
  };
  return (
    <>
      <div className={commonStyle.container}>
        <h1>Booking Details</h1>
        <hr />
        <RoomComponent />
        <br></br>
        <UserCredentialsComponent />
        <br></br>
        <CheckInCheckOut />
        <br></br>
        <SummaryComponent />
        <button className={style.submitBtn} onClick={storeData}>
          Proceed
        </button>
        <br></br>
      </div>
      <Footer />
    </>
  );
};
