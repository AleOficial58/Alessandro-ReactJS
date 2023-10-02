import React from "react";
import { FinalizarCompra } from "../JS/Carrito";
import { Button } from "@chakra-ui/react";
import { CartContext } from '../Contexts/Context'

const Cart = () => {
  const [cart, setCart] = React.useContext(CartContext)

  return <Button
    onClick={() => FinalizarCompra(cart)}
  >
    Finalizar Compra
  </Button>;
};

export default Cart;
