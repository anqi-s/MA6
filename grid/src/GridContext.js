import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    setCells((prevCells) =>
      prevCells.map((cell, i) => (i === index ? !cell : cell))
    );
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};
