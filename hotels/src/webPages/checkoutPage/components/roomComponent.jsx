import { useEffect, useReducer, useState } from "react";
import style from "../checkout-page-styles/roomComponent.module.css";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaArrowRightArrowLeft,
  FaBed,
  FaStairs
} from "react-icons/fa6";

export let RoomComponent = ({ onChange }) => {
  const roomCount = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        if (state.numberOfRooms + 1 > 9) {
          alert(
            "you reached the maximum booking allowed for an individual user"
          );
          return state;
        }
        let increasedNumberOfRooms = state.numberOfRooms + 1;
        let IncreasedPrice = increasedNumberOfRooms * 500;
        return {
          numberOfRooms: increasedNumberOfRooms,
          price: IncreasedPrice,
        };
      case "DECREASE":
        if (state.numberOfRooms - 1 <= 0) {
          alert("you need to select at least one room");
          return state;
        }
        let decreasedNumberOfRooms = state.numberOfRooms - 1;
        let decreasedPrice = decreasedNumberOfRooms * 500;
        return {
          numberOfRooms: decreasedNumberOfRooms,
          price: decreasedPrice,
        };
      default:
        return state;
    }
  };

  let initialState = {
    numberOfRooms: 1,
    price: 500,
  };
  let [state, dispatch] = useReducer(roomCount, initialState);
    useEffect(() => {
      // here callback - when number of rooms change - callback for updated price and update number of rooms.
      onChange(state.price, state.numberOfRooms);
    }, [state.numberOfRooms, onChange]);
    // console.log(state.numberOfRooms);
  return (
    <>
      <section>
        <div className={style.hotel_detail}>
          <div className={style.left_img_division}>
            <img src="./assets/images/02(3).jpg" alt="image1" />
            <img src="./assets/images/13.jpg" alt="image2" />
            <img src="./assets/images/15.jpg" alt="image3" />
            <img src="./assets/images/16.jpg" alt="image4" />
          </div>
          <div className={style.right_hotel_detail_division}>
            <div>
              <h1>Hotel: Courtyard by Marriott New York</h1>

              <p>
                <IoLocationOutline />
                5855 W Century Blvd, ls Angeles-90045
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                pariatur unde rerum voluptatibus, animi voluptatum nemo natus
                maxime vel iure consequatur quidem repellat earum illo quis
                dolorem voluptas possimus tempore.
              </p>
            </div>
            <div className={style.topFacilitiesContainer}>
              <div className={style.iconContainer}>
                <FaBed className={style.icons} />
                <p>
                  Type <strong>King</strong>
                </p>
              </div>
              <div className={style.iconContainer}>
                <FaArrowRightArrowLeft className={style.icons} />
                <p>
                  Side <strong>Left Side</strong>
                </p>
              </div>
              <div className={style.iconContainer}>
                <FaStairs className={style.icons} />
                <p>
                  Floor <strong>3rd Floor(T5)</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.room_quantity}>
          <button
            onClick={() => dispatch({ type: "INCREASE" })}
            className={style.no_border_button}
          >
            +
          </button>
          <input
            className={style.no_border_input}
            readOnly
            type="text"
            value={state.numberOfRooms}
          />
          <button
            onClick={() => dispatch({ type: "DECREASE" })}
            className={style.no_border_button}
          >
            -
          </button>
          Rooms
        </div>
      </section>
    </>
  );
};
