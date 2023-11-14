import React from 'react';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/config";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
      const productosflashRef = collection(db, "productosflash");
      const q = categoria ? query(productosflashRef, where("categoria", "==", categoria)) : productosflashRef;

      getDocs(q)
          .then((resp) => {
              setProductos(
                  resp.docs.map((doc) => {
                      return { ...doc.data(), id: doc.id };
                  })
              );
          });
  }, [categoria])
  .catch((error) => {
    console.error('Error fetching data from Firestore:', error);
  });
  
  return (
      <div>
          <ItemList productosflash={productos} />
      </div>
  );
};

export default ItemListContainer;


