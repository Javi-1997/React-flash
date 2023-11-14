import React from 'react';

import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/configuracion";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const productosflashRef = collection(db, "productosflash");
      const q = categoria ? query(productosflashRef, where("categoria", "==", categoria)) : productosflashRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    
    
  return (
    <div>
        <ItemList productosflash={productos} nombre={titulo} />
    </div>
  )
}

export default ItemListContainer