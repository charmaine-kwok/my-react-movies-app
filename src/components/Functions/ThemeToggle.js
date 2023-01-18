import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

import styles from './ThemeToggle.module.css';

const moon = <FontAwesomeIcon icon={faMoon} color="gold" />;
const sun = <FontAwesomeIcon icon={faSun} color="gold" />;

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    console.log('TODO more on this later');
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className={styles['toggle-wrapper']} htmlFor="toggle">
      <div className={styles[`toggle ${isEnabled ? 'enabled' : 'disabled'}`]}>
        <span className={styles['hidden']}>
          {isEnabled ? 'Enable' : 'Disable'}
        </span>
        <div className={styles['icons']}>
          <div>{moon}</div>
          <div>{sun}</div>
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  );
}
