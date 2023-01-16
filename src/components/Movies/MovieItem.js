import styles from "./MovieItem.module.css";
import DateAndLocation from "./DateAndLocation";

const MoviesItem = (props) => {
  return (
    <div className={styles["movie-item"]}>
      <img className={styles["movie-item-img"]} src={props.pic} alt="" />
      <div className={styles["movie-item-text-container"]}>
        <p className={styles["movie-title"]}>{props.title}</p>
        <p className={styles["movie-desc"]}>{props.desc}</p>
      </div>
      <DateAndLocation location={props.location} date={props.date} />
    </div>
  );
};

export default MoviesItem;
