import React from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "PAGINA WEB DESARROLLO FULL STACK",
      descripcion: "Desarrollo de una web completa",
      stock: 10,
      categoria: "",
      precio: 2050,
      Moneda: "USD"
    },
    {
      id: 2,
      nombre: "Backend Pagina",
      descripcion: "La pagina mas desarrollada del mundo",
      stock: 7,
      categoria: "",
      precio: 7000,
    },
    {
      id: 3,
      nombre: "REACT JS, Backend + Tecnologias JavaScript, TypeScript y C++ ",
      descripcion: "LISTA PARA SALIR A PELEAR",
      stock: 3,
      categoria: "",
      precio: 17000,
    }

    
  ];


  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <>
      <ItemDetail productos={productos}
      />
    </>
  );
};

export default ItemDetailContainer;
