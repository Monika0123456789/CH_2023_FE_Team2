import dataStore from "../../store";
import {
  ADD_BOOKING_DETAILS,
  ADD_USER_DATA,
  DECREASE_COUNT,
  INCREASE_COUNT,
} from "../types/roomQuantity.types";

const INITIAL_VALUE = {
  roomCount: 1,
  fullName: "",
  email: "",
  mobileNumber: "",
  nationality: "IND",
  dateOfBirth: "",
  address: "",
  gender: "",
  checkin: "",
  checkout: " ",
  price: "500",
};
const roomReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...store,
        roomCount: store.roomCount + 1,
        price: (store.roomCount + 1) * 500,
      };
    case DECREASE_COUNT:
      return {
        ...store,
        roomCount: store.roomCount - 1,
        price: (store.roomCount - 1) * 500,
      };
    case ADD_USER_DATA:
      return { ...store, ...action.payload };
    case ADD_BOOKING_DETAILS:
      return { ...store, ...action.payload };
    default:
      return store;
  }
};
export default roomReducer;
