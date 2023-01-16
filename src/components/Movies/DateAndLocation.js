import styles from "./DateAndLocation.module.css";

const DateAndLocation = (props) => {
  return (
    <div className={styles["movie-location-date-container"]}>
      <div className={styles["movie-location"]}>
        <p>{props.location}</p>
      </div>
      <div className={styles["movie-date"]}>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default DateAndLocation;
