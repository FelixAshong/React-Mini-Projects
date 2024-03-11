import React, { useEffect } from "react";
import { useGlobalContext } from "../context/Gifts.context";
import Son from "./Son";

const Father = () => {
  const { gifts, setGifts } = useGlobalContext();

  useEffect(() => {
    setGifts(['toy1','toy2','toy3','Good cake']);
  },[]);

  
  return (
    <div>
      Im Father
      <Son />
    </div>
  );
};

export default Father;
