import React from 'react';

import './App.css';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import Inicio from './components/Inicio';
import Blogs from './components/Blogs';
import Contacto from './components/Contacto';

import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    
    {}
    <ItemListContainer />
  </div>
);
      
    
      
    
  
  }
  export default App;