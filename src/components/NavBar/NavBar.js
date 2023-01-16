import styles from "./NavBar.module.css";

import NavBarItem from "./NavBarItem";
import Profile from "./Profile";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Logo />
        <NavBarItem name="With others"></NavBarItem>
        <NavBarItem name="Non-movies"></NavBarItem>
      </ul>
      <Profile />
    </div>
  );
};

export default NavBar;
