import React, { useState, useEffect } from 'react';
import data from '../data/productos.json'



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      
        resolve(data);
    });
  };
  
  useEffect(() =>{
       pedirProductos()
        .then((res)=>{
            setProductos (res);
         })
    }, [])
  
    return(
      <div>
           { 
              productos.length> 0 && 
              productos.map((productos) =>{
                  return(
                      <div className='card'>
                         <img src={productos.imagen} alt={productos.name}/>
                         <h2>{productos.name}</h2>
                          <p>{productos.description}</p>
                          <p>${productos.price}</p>
                          
                      </div>
                  )
        })
      }
       </div>
    
    
    
    );
  
    
};

export default ItemListContainer;

