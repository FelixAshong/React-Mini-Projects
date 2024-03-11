import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <section className="links-container">
        {Data.map((item) => {
          return (
            <Link key={item.id} to={"/products/" + item.id}>
              <button>{item.title}</button>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Products;
