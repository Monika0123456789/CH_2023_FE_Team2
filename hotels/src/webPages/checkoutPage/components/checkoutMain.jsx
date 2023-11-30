import { CheckInCheckOut } from "./checkinCheckoutComponent";
import { RoomComponent } from "./roomComponent";
import { UserCredentialsComponent } from "./userCredentialsComponent"
import style from "../checkout-page-styles/checkoutMain.module.css";
import { useState } from "react";

export let CheckoutMain = () => {
    const [totalPrice, setTotalPrice] = useState(500); // Initialize with the base price

    const handleChange = (newPrice, rooms) => {
      setTotalPrice(newPrice);
    
      console.log(rooms,newPrice)
    };
  return (
    <div style={{ width: "100%" }}>
      <h1>Booking Details</h1>
      <hr />
      <RoomComponent onChange={handleChange} />
      <br></br>
      <UserCredentialsComponent />
      <br></br>
      <CheckInCheckOut  totalPrice={totalPrice}/>
      <br></br>
      <button className={style.submitBtn}>Proceed</button>
      <br></br>
    </div>
  );
}