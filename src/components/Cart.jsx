import React, { useState } from "react";
import { FinalizarCompra } from "../JS/Carrito";
import { Button, Input } from "@chakra-ui/react";
import { CartContext } from '../Contexts/Context'
import Swal from 'sweetalert2';

const Cart = () => {
  const [cart, setCart] = React.useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleDNIChange = (e) => {
    setDNI(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFinalizarCompra = () => {
    if (nombre.trim() === '' || apellido.trim() === '' || dni.trim() === '' || email.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    } else {
      // Realiza la lógica para finalizar la compra con los datos ingresados
      // Puedes usar los valores de 'nombre', 'apellido', 'dni' y 'email' en esta función
      // ...
      Swal.fire({
        title: 'Compra finalizada',
        text: `¡Gracias por tu compra, ${nombre} ${apellido}! Hemos enviado la confirmación a ${email}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    }
  };


};

export default Cart;
