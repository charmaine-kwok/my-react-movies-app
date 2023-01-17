import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import themes from './components/Theme/themes';

import './App.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme['background-color']};
`;

const App = () => {
  const [themeState, setThemeState] = useState('dark');

  const themeToggle = () => {
    console.log('Change Theme!!!');
    console.log(themeState);
    console.log(themes.light);
    themeState === 'dark' ? setThemeState('light') : setThemeState('dark');
  };

  return (
    <ThemeProvider theme={themeState === 'light' ? themes.light : themes.dark}>
      <Navbar onChangeTheme={themeToggle} />
      <StyledApp>
        <Movies />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
