import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mod, setMod] = useState("light");
  const [navbarClass, setNavbarClass] = useState("navbar-light");
  const [pageClass, setPageClass] = useState("page-light");

  const handleMod = () => {
    const newMod = mod === "light" ? "dark" : "light";
    setMod(newMod);
    setNavbarClass(`navbar-${newMod}`);
    setPageClass(`page-${newMod}`);
  };

  return (
    <AppContext.Provider
      value={{
        mod,
        navbarClass,
        pageClass,
        handleMod,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
