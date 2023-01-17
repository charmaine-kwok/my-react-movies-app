import React, { Fragment, useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";

import "./App.css";

const App = () => {
  // const [themeState, setThemeState] = useState(
  //   document.body.style.backgroundColor
  // );

  const setDarkTheme = () => {
    // setThemeState("rgb(36, 36, 36)");
    console.log("To dark theme!");
    console.log(document.body.style.backgroundColor);
    document.body.style.backgroundColor = "rgb(36, 36, 36)";
  };

  const setLightTheme = () => {
    console.log("To light theme!");
    console.log(document.body.style.backgroundColor);
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    // setThemeState("#FFF");
  };

  return (
    <Fragment>
      <Navbar
        onChangeTheme={
          (document.body.style.backgroundColor = "rgb(36, 36, 36)"
            ? setLightTheme
            : setDarkTheme)
        }
      />
      <Movies />
    </Fragment>
  );
};

export default App;
