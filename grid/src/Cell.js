import React from 'react';

const Cell = ({ isOn, toggleCell }) => {
  return (
    <div
      onClick={toggleCell}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isOn ? 'black' : 'white',
        boxShadow: '0 0 0 1px grey',
      }}
    />
  );
};

export default Cell;
