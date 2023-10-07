import React from "react";
import { FinalizarCompra } from "../JS/Carrito";
import { Button } from "@chakra-ui/react";
import { CartContext } from '../Contexts/Context'
import Swal from 'sweetalert2';

const Cart = () => {
  const [cart, setCart] = React.useContext(CartContext);

  const handleFinalizarCompra = () => {
    
    Swal.fire({
      title: 'Compra finalizada',
      text: '¡Gracias por tu compra!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="cart-container">
      <Button
        className="finalizar-compra-button"
        onClick={handleFinalizarCompra} // Asocia la función de manejo de clic
      >
        Finalizar Compra
      </Button>
    </div>
  );
};

export default Cart;
