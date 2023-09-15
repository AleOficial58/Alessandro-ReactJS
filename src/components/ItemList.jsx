import React from "react";
import Item from "./Item";
import { Flex, Spacer, } from "@chakra-ui/react";

const ItemList = ({ productos }) => {

  return (
    <div>
      {
        productos.map((p) => {
        return (
        <Item producto={p} key={p.id} />
      )})}
  </div>);
};

export default ItemList;
