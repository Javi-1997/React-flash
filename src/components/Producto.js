import React from 'react';

const Product = ({ id, name, description, price }) => (
  <div key={id} className="producto">
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
  </div>
);


export default ProductList;
