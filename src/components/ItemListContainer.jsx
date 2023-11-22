import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import React from "react";
import { useParams } from "react-router-dom";
import { ObtenerProductos } from "../JS/Carrito";

const ItemListContainer = () => {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    let prods = []
    ObtenerProductos()
      .then(e => {
        if (e.size > 0) {
          e.forEach(element => {
            let prod = element.data()
            prod.id = element.id
            prods.push(prod)
          });
          if (categoria) {
            setProductos(prods.filter(item => item.categoria === categoria))
          } else {
            setProductos(prods)
          }
        } else {
          setProductos([])
        }
      })
  }, [categoria])

  return (
    <ItemList productos={productos} />
  );
};


export default ItemListContainer;
