import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className="logo"><h1>TiendaFlash</h1></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/">Inicio</Link></li>
        <li><Link className="menu-link" to="/about">Productos</Link></li>
        <li><Link className="menu-link" to="/services">Servicios</Link></li>
        <li><Link className="menu-link" to="/contact">Contacto</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
