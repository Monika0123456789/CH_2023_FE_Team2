import { useState } from "react";
import { Traveller } from "./traveller";
import styles from "../checkout-page-styles/travellerDetailComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseTravellerCount,
  increaseTravellerCount,
} from "../redux/actions/roomQuantity.actions";

export let TravellerComponent = () => {
  let [travellers, setTravellers] = useState([]);

  const dispatch = useDispatch();
  const travellersCount = useSelector((store) => store.numberOfTravellers);
  console.log(travellersCount);

  // const addTravellerClick = () => {
  //   setTraveller(() => [...traveller, <Traveller idn={Math.random()}/>]);
  // };
  const addTravellerClick = () => {
    const newTraveller = {
      // Use a unique ID (you can use a library like uuid for better uniqueness)
      id: Date.now(),
      component: <Traveller idn={Date.now()} onRemove={removeTraveller} />,
    };

    setTravellers((prevTravellers) => [...prevTravellers, newTraveller]);
    dispatch(increaseTravellerCount());
  };
  const removeTraveller = (idToRemove) => {
    setTravellers((prevTravellers) =>
      prevTravellers.filter((traveller) => traveller.id !== idToRemove)
    );
    dispatch(decreaseTravellerCount());
  };
  return (
    <div className={styles.travellerDetailContainer}>
      <h1>Travelers Detail</h1>
      {travellers.map((traveller) => (
        <div key={traveller.id}>{traveller.component}</div>
      ))}
      <div>
        <button className={styles.addTravellerBtn} onClick={addTravellerClick}>
          + Add New Traveller
        </button>
      </div>
    </div>
  );
};
