import styles from "./Profile.module.css";
import ball from "./ball.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const moon = <FontAwesomeIcon icon={faMoon} color="gold" />;
const sun = <FontAwesomeIcon icon={faSun} color="gold" />;

const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <img className={styles["profile-picture"]} src={ball} alt="" />
      <div className={styles["profile-text-container"]}>
        <span className={styles["profile-text"]}>Profile</span>
        <i className={styles["fa-solid fa-caret-down"]}></i>
      </div>
      <div className={styles.toggle}>
        <div>{moon}</div>
        <div>{sun}</div>
        <div className={styles["toggle-ball"]}></div>
      </div>
    </div>
  );
};

export default Profile;
