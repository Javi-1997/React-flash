import React, { useState, useEffect } from 'react';
import jsonData from './data/productos.json';
import Wrapper from './Wrapper';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      //  delay
      setTimeout(() => {
        resolve(jsonData);
      }, 1000);
    });
  };

  useEffect(() => {
    pedirProductos()
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setProductos([]);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : ( 
        <Wrapper>
        <div className="products-container">
          {productos && productos.map(producto => (
            <producto key={producto.id} {...producto} />
          ))}
        </div>
      </Wrapper>
      )} 
    </div>
  );
};

export default ItemListContainer;
