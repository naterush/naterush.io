import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardCaraselle from './components/CardCaraselle';

function App() {
  return (
    <div className="App">
      <CardCaraselle
        caraselleNum={0}
      />
      <CardCaraselle
        caraselleNum={1}
      />
    </div>
  );
}

export default App;
