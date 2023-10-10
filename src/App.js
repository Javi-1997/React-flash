import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import { CartContext } from './context/cartcontext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from "react-dom/client";

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
    </BrowserRouter></>
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
    </div></>
    
  );
}

export default App;
