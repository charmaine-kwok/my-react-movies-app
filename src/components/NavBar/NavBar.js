import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../Theme/themes';
import styles from './NavBar.module.css';

import NavBarItem from './NavBarItem';
import Profile from './Profile';
import Logo from './Logo';

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme['background-color']};
`;

const NavBar = (props) => {
  const [themeState, setThemeState] = useState('dark');

  const themeToggle = () => {
    console.log('Change Theme!!!');
    themeState === 'dark' ? setThemeState('light') : setThemeState('dark');
  };

  return (
    <ThemeProvider theme={themeState === 'light' ? themes.light : themes.dark}>
      <StyledApp>
        <div className={styles.navbar}>
          <ul>
            <Logo />
            <NavBarItem name="With others"></NavBarItem>
            <NavBarItem name="Non-movies"></NavBarItem>
          </ul>
          <Profile onChangeTheme={props.onChangeTheme} theme={props.theme} />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default NavBar;
