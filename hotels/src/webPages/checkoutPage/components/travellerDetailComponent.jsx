import { useState } from "react";
import { Traveller } from "./traveller";
import styles from "../checkout-page-styles/travellerDetailComponent.module.css";

export let TravellerComponent = () => {

  let [travellers, setTravellers] = useState([]);

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
    };
      const removeTraveller = (idToRemove) => {
        setTravellers((prevTravellers) =>
          prevTravellers.filter((traveller) => traveller.id !== idToRemove)
        );
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


