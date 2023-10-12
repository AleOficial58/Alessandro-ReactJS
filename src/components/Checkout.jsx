import React, { useState, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Contexts/Context';
import { FinalizarCompra } from "../JS/Carrito";

function Checkout() {
  // Puedes declarar estados aquí si los necesitas
  const [contador, setContador] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Función onAdd
  const onAdd = () => {
    if (contador > 0) {
      let prod = {
        // Aquí debes especificar la estructura de tu producto
        // Ejemplo: nombre, precio, etc.
        cantidad: contador,
      };
      setCart([...cart, prod]);

      // Puedes agregar código adicional aquí, como una alerta con SweetAlert2
      Swal.fire("Producto agregado al carrito");
    }
  }

  // Función para finalizar la compra
  const handleFinalizarCompra = () => {
    // Aquí puedes llamar a la función que finaliza la compra
    FinalizarCompra();
    
    // Puedes agregar navegación o redirección a otra página aquí
    navigate("/ruta-de-exito");
  }

  return (
    <div>
      {/* Aquí puedes renderizar tus componentes y elementos JSX */}
      <Input
        type="number"
        value={contador}
        onChange={(e) => setContador(e.target.value)}
      />
      <Button onClick={onAdd}>Agregar al carrito</Button>
      <Button onClick={handleFinalizarCompra}>Finalizar Compra</Button>

      {/* Puedes agregar más componentes y lógica aquí */}
    </div>
  );
}

export default Checkout;
