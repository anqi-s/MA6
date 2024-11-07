import React from 'react';
import './App.css';
import Grid from './Grid';
import { GridProvider } from './GridContext';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <Grid />
      </div>
    </GridProvider>
  );
}

export default App;
