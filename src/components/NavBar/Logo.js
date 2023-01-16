import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <li>
      <a className={styles.logo} href="other.html">
        Movies
      </a>
    </li>
  );
};

export default Logo;
