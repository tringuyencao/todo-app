import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello My Todo</h1>
        <Todos/>
      </header>
    </div>
  );
}

export default App;
