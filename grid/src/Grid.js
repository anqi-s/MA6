import React from 'react';
import { useGrid } from './GridContext';
import Cell from './Cell';

const Grid = () => {
  const { cells, toggleCell } = useGrid();
  const onCount = cells.filter((isOn) => isOn).length;

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Count: {onCount}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '0px' }}>
        {cells.map((isOn, index) => (
          <Cell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
