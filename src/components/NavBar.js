import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href='#' className="logo"><h1>TiendaFlash</h1></a>
      <ul className="menu">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Productos</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/contact">Contacto</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
