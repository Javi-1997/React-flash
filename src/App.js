import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import { CartContext } from './context/cartcontext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
     <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" elemento={< />} />
        </Route>
      </Routes>
    
    <><Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    <div className="App">
      <CartContext.Provider value={1}></CartContext.Provider>
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
      </BrowserRouter></>
    </div></>
    
  );
}

export default App;
