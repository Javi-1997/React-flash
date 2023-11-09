import React, { useState, useEffect } from 'react';
import data from './data/productos.json';
import Wrapper from './Wrapper';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      
        resolve(data);
    });
  };
  
   pedirProductos()
      .then((res)=>{
          setProductos = res;
      })
  
    return(
      <div>
        {productos[0].name}
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
     
  useEffect(() => {
    ItemListContainer()
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

  
    
};

export default ItemListContainer;
