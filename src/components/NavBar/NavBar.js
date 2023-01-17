import styles from "./NavBar.module.css";

import NavBarItem from "./NavBarItem";
import Profile from "./Profile";
import Logo from "./Logo";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Logo />
        <NavBarItem name="With others"></NavBarItem>
        <NavBarItem name="Non-movies"></NavBarItem>
      </ul>
      <Profile onChangeTheme={props.onChangeTheme} />
    </div>
  );
};

export default NavBar;
