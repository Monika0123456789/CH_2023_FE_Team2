import { useState } from "react";
import styles from "../checkout-page-styles/travellerDetailComponent.module.css";

export let Traveller = ({idn, onRemove}) => {
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });
  // console.log (idn)

  let addFirstName = (evt) => {
    setUser(() => ({ ...user, firstname: evt.target.value }));
  };
  let addLastName = (evt) => {
    setUser(() => ({ ...user, lastname: evt.target.value }));
  };

  let removeTraveller = () => {
    onRemove(idn)

  }
  return (
    <div className={styles.travellerContainer}>
      <hr />
      <div className={styles.travellerBanner}>
        <h4>
          {user.firstname} {user.lastname}
        </h4>
        <button className={styles.removeTraveller} onClick={removeTraveller}>
          Remove
        </button>
      </div>
      <div className={styles.travellerViewForm}>
        <div className={styles.colsFull}>
          <label htmlFor="name" className={styles.travellerLabel}> Full name</label>
          <input
            className={`${styles.travellerInput} ${styles.travellerInput1}`}
            type="text"
            onChange={addFirstName}
          />
          <input
            className={`${styles.travellerInput} ${styles.travellerInput2}`}
            type="text"
            onChange={addLastName}
          />
        </div>
        <div className={styles.colsFull}>
          <label htmlFor="dob" className={styles.travellerLabel}>Date of Birth</label>
          <input
            className={`${styles.travellerInput} ${styles.travellerInput3}`}
            type="date"
          />
        </div>
      </div>
    </div>
  );
};
