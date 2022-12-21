import React, { useEffect, useState } from 'react';
import './app.css'
import Game from './pivotJS/Game'
function App() {
  const game = new Game('canvas') 




  return (
    <div className="App">
      <canvas id="canvas">

      </canvas>
      
    </div>
  );
}

export default App;
