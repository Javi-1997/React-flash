import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><h1>TiendaFlash</h1></Link>
      <ul className="menu">
        
        <li><Link className="menu-link" to="/Inicio">Inicio</Link></li>
        <li><Link className="menu-link" to="/about">Acerca de</Link></li>
        <li><Link className="menu-link" to="/services">Servicios</Link></li>
        <li><Link className="menu-link" to="/contact">Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
