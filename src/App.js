import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import Inicio from './components/Inicio';
import Blogs from './components/Blogs';
import Contacto from './components/Contacto';
import { CartContext } from './context/cartcontext';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item" element={<Inicio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    document.getElementById("root")
    {}
    <ItemListContainer />
  </div>
);
      
    
      
    
  
  }
  export default App;