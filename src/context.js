import React, { useState, useContext, useRef } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <AppContext.Provider
      value={{
        homeRef,
        skillRef,
        projectRef,
        contactRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
