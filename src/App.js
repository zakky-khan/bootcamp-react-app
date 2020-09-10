import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>hello  world from zakky</code> z.
           <Dinner />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Dinner />
    </div>
  );
}

export default App;
