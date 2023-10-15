import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Grid, GridItem, Img } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
const {categoria} = useParams ()


  const productos = [
    {
      id: 1,
      nombre: "Desarrollo Web Full Sack",
      descripcion: "Desarrollamos tu pagina web con todas las tecnologias",
      stock: 10,
      categoria: "SIS1",
      precio: 2050,
      Moneda: "USD",
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 2,
      nombre: "JavaScript",
      descripcion: "La pagina mas desarrollada del mundo",
      stock: 7,
      categoria: "SIS1",
      precio: 7000,
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 3,
      nombre: "React JS",
      descripcion: "LISTA PARA SALIR A PELEAR",
      stock: 3,
      categoria: "SIS1",
      precio: 17000,
      Imagen: "./images/Foto1.jpeg"
    },
    {
      id: 4,
      nombre: "Mantenimiento Web",
      descripcion: "productos de mantenimiento",
      stock: 10,
      categoria: "SIS2",
      precio: 23000,
      Imagen: "./images/Foto1.jpeg"
    },  
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay mas datos"));
    }
  });

  getProductos
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });


const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

  return (

      categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

  );
};


export default ItemListContainer;
