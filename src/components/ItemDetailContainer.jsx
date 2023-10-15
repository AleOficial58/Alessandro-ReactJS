import React from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Desarrollo Web Full Sack",
      descripcion: "Creamos tu sitio web utilizando las últimas tecnologías disponibles.",
      stock: 10,
      categoria: "",
      precio: 2050,
      Moneda: "USD",
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 2,
      nombre: "JavaScript",
      descripcion: "Preparado para enfrentar el desafío.",
      stock: 7,
      categoria: "",
      precio: 7000,
      Moneda: "USD",
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 3,
      nombre: "React JS",
      descripcion: "Productos para el cuidado y mantenimiento.",
      stock: 3,
      categoria: "",
      precio: 17000,
      Moneda: "USD",
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 4,
      nombre: "Mantenimiento Web",
      descripcion: "Artículos de mantenimiento.",
      stock: 10,
      categoria: "SIS2",
      precio: 23000,
      Moneda: "USD",
      Imagen: "./images/Foto1.jpeg"
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
    .then((res) => {
    })
    .catch((error) => {
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
