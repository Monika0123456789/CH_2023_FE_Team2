import { useEffect, useState } from "react";
import style from "../checkout-page-styles/checkinCheckoutComponent.module.css";
import { TravellerComponent } from "./travellerDetailComponent";
import { useDispatch } from "react-redux";
import { addBookingDetails } from "../redux/actions/roomQuantity.actions";

export let CheckInCheckOut = () => {
  let [state, setState] = useState({
    checkin: "",
    checkout: "",
  });
  const dispatch = useDispatch();

  const updateDates = (e) => {
    const { name, value } = e.target;

    const currentDate = new Date();
    const selectedDate = new Date(value);
    // console.log(currentDate);
    // console.log(selectedDate);

    // Set the time portion to the end of the day - setting selected date to last millisecond of the day
    selectedDate.setUTCHours(23, 59, 59, 999);

    // checking that chekin date should not b in past
    if (name === "checkin" && selectedDate < currentDate) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    // checking that chekout date should not b later than checkin
    if (name === "checkout" && selectedDate <= new Date(state.checkin)) {
      alert("Checkout date must be later than check-in date.");
      return;
    }
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  useEffect(() => {
    const formattedState = {
      ...state,
      checkin: state.checkin.replace("T", " "),
      checkout: state.checkout.replace("T", " "),
    };
    dispatch(addBookingDetails(formattedState));
  }, [state, dispatch]);
  return (
    <>
      <div className={style.checkinCheckoutContainer}>
        <div className={style.cols}>
          <label className={`${style.required} ${style.dateLabels}`}>
            Check-in Date
          </label>
          <input
            type="datetime-local"
            name="checkin"
            value={state.checkin}
            className={style.dateInputs}
            onChange={updateDates}
          />
        </div>
        <div className={style.cols}>
          <label className={`${style.required} ${style.dateLabels}`}>
            Check-out Date
          </label>
          <input
            type="datetime-local"
            name="checkout"
            className={style.dateInputs}
            value={state.checkout}
            onChange={updateDates}
          />
        </div>
      </div>
      <TravellerComponent />
    </>
  );
};
