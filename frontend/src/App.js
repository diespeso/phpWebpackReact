import logo from './logo.svg';
import './App.css';

import store from './store';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { setNumber } from './store/test.reducer';

import Client from './components/Client';

function App() {
  
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Client></Client>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div>
  );
}

export default App;
