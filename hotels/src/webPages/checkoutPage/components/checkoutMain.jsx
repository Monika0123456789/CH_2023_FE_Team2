import { CheckInCheckOut } from "./checkinCheckoutComponent";
import { RoomComponent } from "./roomComponent";
import { UserCredentialsComponent } from "./userCredentialsComponent"
import style from "../checkout-page-styles/checkoutMain.module.css";
import { useState } from "react";

export let CheckoutMain = () => {
    const [totalPrice, setTotalPrice] = useState(500); // Initialize with the base price

    const handlePriceChange = (newPrice) => {
      setTotalPrice(newPrice);
      console.log(totalPrice)
    };
  return (
    <div style={{ width: "100%" }}>
      <h1>Booking Details</h1>
      <hr />
      <RoomComponent onPriceChange={handlePriceChange} />
      <br></br>
      <UserCredentialsComponent />
      <br></br>
      <CheckInCheckOut />
      <br></br>
      <button className={style.submitBtn}>Proceed</button>
      <br></br>
    </div>
  );
}