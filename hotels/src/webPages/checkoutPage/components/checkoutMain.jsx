import { CheckInCheckOut } from "./checkinCheckoutComponent";
import { RoomComponent } from "./roomComponent";
import { UserCredentialsComponent } from "./userCredentialsComponent";
import style from "../checkout-page-styles/checkoutMain.module.css";
import dataStore from "../store";


export let CheckoutMain = () => {
  let storeData = () => {
    const data = dataStore.getState();

    const existingDataString = localStorage.getItem("Booking Details");

    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {};

       const bookingId = Date.now();
          const newBooking = {
            [bookingId]: data,
          };

    const mergedData = {
      ...existingData,
      bookingData:{
        ...existingData.bookingData || {},
        ...newBooking,
      },
    };

    localStorage.setItem("Booking Details", JSON.stringify(mergedData));
    // console.log("Data saved to local storage:", data);
  };
  return (
    <div style={{ width: "100%" }}>
      <h1>Booking Details</h1>
      <hr />
      <RoomComponent />
      <br></br>
      <UserCredentialsComponent />
      <br></br>
      <CheckInCheckOut />
      <br></br>
      <button className={style.submitBtn} onClick={storeData}>
        Proceed
      </button>
      <br></br>
    </div>
  );
};
