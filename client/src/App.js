import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Franck IO

        </a>
      </header>
      <h1>Communication avec socket.io !</h1>

      <script src="/socket.io/socket.io.js"></script>
      <script>
        var socket = io.connect('http://localhost:4000');
      </script>


    </div>


  );
}

export default App;
