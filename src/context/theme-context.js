import React from "react";

export const themes = {
  light: {
    "background-color": "lightblue",
    color: "black",
  },
  dark: {
    "background-color": "rgb(36, 36, 36)",
    color: "white",
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
