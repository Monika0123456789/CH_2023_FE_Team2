import styles from "../checkout-page-styles/summaryComponent.module.css";

export let SummaryComponent = ({checkin,checkout}) => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.bookingDetails}>
        <label htmlFor="checkInDate" className={styles.bookingLabels}>
          Check-In
        </label>
        <input className={styles.summaryInp} id="checkIn" type="datetime" readOnly value={checkin} />
      </div>
      <div className={styles.bookingDetails}>
        <label htmlFor="checkOutDate" className={styles.bookingLabels}>
          Check-Out
        </label>
        <input className={styles.summaryInp} id="checkOutDate" type="datetime" readOnly value={checkout} />
      </div>
      <div className={styles.bookingDetails}>
        <label htmlFor="amount" className={styles.bookingLabels}>
          Total Amount
        </label>
        <input className={styles.summaryInp} type="text" id="amount" readOnly />
      </div>
    </div>
  );
}