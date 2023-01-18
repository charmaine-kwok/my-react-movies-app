import React, { Fragment, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import themes from './components/Theme/themes';

import './App.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme['background-color']};
`;

// const StyledNavbar = styled.div`
//   color: ${(props) => props.theme.color};
//   background-color: ${(props) => props.theme['background-color']};
// `;

const App = () => {
  const [themeState, setThemeState] = useState('dark');

  const themeToggle = () => {
    console.log('Change Theme!!!');
    themeState === 'dark' ? setThemeState('light') : setThemeState('dark');
  };

  return (
    <Fragment>
      <ThemeProvider
        theme={themeState === 'light' ? themes.dark : themes.light}
      >
        <StyledApp>
          <Navbar onChangeTheme={themeToggle} />
        </StyledApp>
      </ThemeProvider>
      <ThemeProvider
        theme={themeState === 'light' ? themes.light : themes.dark}
      >
        <StyledApp>
          <Movies />
        </StyledApp>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
