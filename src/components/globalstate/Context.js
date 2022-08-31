/** @format */

import { createContext, useState } from "react";

import React from "react";
export const GlobalState = createContext();
export const Context = (props) => {
  const [display, setdisplay] = useState(false);
  const info = { display, setdisplay };
  return (
    <GlobalState.Provider value={info}>{props.children}</GlobalState.Provider>
  );
};
