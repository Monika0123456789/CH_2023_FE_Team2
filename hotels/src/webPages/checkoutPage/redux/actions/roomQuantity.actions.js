import { ADD_BOOKING_DETAILS, ADD_USER_DATA, DECREASE_COUNT, INCREASE_COUNT } from "../types/roomQuantity.types"

export const increaseCount = () => {
  return{
    type: INCREASE_COUNT
  }
}

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT,
  };
  
};
export const addUser = (args) => {
  return {
    type: ADD_USER_DATA,
    payload: args
  };
};

export const addBookingDetails = (argb) => {
  return {
    type: ADD_BOOKING_DETAILS,
    payload: argb
  };
}