import React from "react";
import { useGlobalContext } from "../context/App.context";

const Navbar = () => {
  const { mod, handleMod, navbarClass } = useGlobalContext();
  return (
    <header className={"navbar " + navbarClass}>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <button onClick={handleMod}>
        Make{(mod !== "light") ? " Day" : " Night"}
      </button>
    </header>
  );
};

export default Navbar;
