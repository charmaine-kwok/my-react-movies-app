import styles from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  return (
    <li className={styles["menu-list-item"]}>
      <a className={styles["menu-link"]} href="other.html">
        {props.name}
      </a>
    </li>
  );
};

export default NavBarItem;
