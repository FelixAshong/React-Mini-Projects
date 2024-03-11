import React, { createContext, useContext, useState } from "react";

const GiftsContext = createContext();

const GiftsProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider
    value={{
        gifts,
        setGifts,
    }}
    > 
    {children}
    </GiftsContext.Provider>
  );
};

export const useGlobalContext = () =>{
    return useContext(GiftsContext);
}

export  {  GiftsContext, GiftsProvider };
