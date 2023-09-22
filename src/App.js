import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';




function App() {
  return (
    <><Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tienda Flash a
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div></>
  );
}

export default App;
