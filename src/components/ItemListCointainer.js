

import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      fetch('your-api-endpoint')
        .then(response => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject('Failed to fetch data');
          }
        })
        .catch(error => {
          reject(error);
        });
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
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {productos.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
