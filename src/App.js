import React, { Fragment } from "react";

import Navbar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Movies />
    </Fragment>
  );
};

export default App;
