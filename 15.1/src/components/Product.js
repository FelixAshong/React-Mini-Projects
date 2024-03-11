import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../data/Data";

const itemData = (id) => {
  const item = Data.find((item) => item.id === parseInt(id));
  return item;
};

const Product = () => {
  const { id } = useParams();
  const item = itemData(id);

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <h2>{item.size}</h2>
      <img src={item.imageUrl} width="200" alt="item" />
      <span>{item.price}</span>
      <Link to="/products">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Product;
