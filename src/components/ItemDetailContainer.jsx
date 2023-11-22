import React from "react";
import ItemDetail from "./ItemDetail";
import { ObtenerProductos } from "../JS/Carrito";

const ItemDetailContainer = () => {
  const [productos, setProductos] = React.useState([])

  React.useEffect(() => {
    let prods = []
    ObtenerProductos()
      .then(e => {
        if (e.size > 0) {
          e.forEach(element => {
            let prod = element.data()
            prod.id = element.id
            prods.push(prod)
          });
          setProductos(prods)
        } else {
          setProductos([])
        }
      })
  }, [])

  return (
    <>
      <ItemDetail productos={productos}
      />
    </>
  );
};

export default ItemDetailContainer;
