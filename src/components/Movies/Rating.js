import styles from "./Rating.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} color="green" />;

const Rating = (props) => {
  return (
    <div class={styles["movie-rating-container"]}>
      <div class={styles["movie-rating-icon-container"]}>
        <div className={styles["movie-rating-star"]}>{star}</div>
        <span class={styles["movie-rating-rate"]}>{props.rating}</span>
      </div>
    </div>
  );
};

export default Rating;
