import React from "react";
import Item from "./Item";
import { Flex, HStack, Spacer, Tag, TagLabel, VStack, } from "@chakra-ui/react";

const ItemList = ({ productos }) => {

  return (
    <div>
      <VStack align="flex-start">
        <HStack spacing={2} overflowX="auto">
          {productos.map((data) => (
             <Item producto={data} key={data.id} />
          ))}
        </HStack>
      </VStack>
    </div>);
};

export default ItemList;
