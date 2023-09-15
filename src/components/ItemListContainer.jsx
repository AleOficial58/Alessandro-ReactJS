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
      nombre: "PAGINA WEB DESARROLLO FULL STACK",
      descripcion: "Desarrollamos tu pagina web con todas las tecnologias",
      stock: 10,
      categoria: "SIS1",
      precio: 2050,
      Moneda: "USD"
    },
    {
      id: 2,
      nombre: "Backend Pagina",
      descripcion: "La pagina mas desarrollada del mundo",
      stock: 7,
      categoria: "SIS1",
      precio: 7000,
    },
    {
      id: 3,
      nombre: "REACT JS, Backend + Tecnologias JavaScript, TypeScript y C++ ",
      descripcion: "LISTA PARA SALIR A PELEAR",
      stock: 3,
      categoria: "SIS1",
      precio: 17000,
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
