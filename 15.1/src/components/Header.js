import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      
      <Link to="/products">
        <button>products</button>
      </Link>
    </>
  );
};

export default Header;
