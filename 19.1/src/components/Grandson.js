import React from "react";
import { useGlobalContext } from "../context/Gifts.context";

const Grandson = () => {
  const { gifts } = useGlobalContext();

  return (
    <div>
      Im Grandson and i love my gifts:
      {gifts.map((gift,index)=><p key={index*Math.random()}>{gift}</p>)}
    </div>
  );
};

export default Grandson;
