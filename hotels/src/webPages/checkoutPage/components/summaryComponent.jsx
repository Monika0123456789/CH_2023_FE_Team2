import { useSelector } from "react-redux";
import styles from "../checkout-page-styles/summaryComponent.module.css";

export let SummaryComponent = () => {

  const price = useSelector((state) => state.price);
  const checkin = useSelector((state) => state.checkin);
  const checkout = useSelector((state) => state.checkout);
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.bookingDetails}>
        <label htmlFor="checkInDate" className={styles.bookingLabels}>
          Check-In
        </label>
        <input
          className={styles.summaryInp}
          id="checkIn"
          type="datetime"
          readOnly
          value={checkin}
        />
      </div>
      <div className={styles.bookingDetails}>
        <label htmlFor="checkOutDate" className={styles.bookingLabels}>
          Check-Out
        </label>
        <input
          className={styles.summaryInp}
          id="checkOutDate"
          type="datetime"
          readOnly
          value={checkout}
        />
      </div>
      <div className={styles.bookingDetails}>
        <label htmlFor="amount" className={styles.bookingLabels}>
          Total Amount
        </label>
        <input
          className={styles.summaryInp}
          style={{color:"green"}}
          type="text"
          id="amount"
          readOnly
          value={`$${price}`}
        />
      </div>
    </div>
  );
}