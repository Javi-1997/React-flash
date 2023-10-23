import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import { CartContext } from './context/cartcontext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
      <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
          <Route path= "e" element={<Inicio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacto" element={<Contacto />} />
      </Routes>
     
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
      
      <CartContext.Provider value={1}></CartContext.Provider>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>|
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
      </BrowserRouter>
      </div>
    
  );
  }