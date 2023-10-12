import React, { useState, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Contexts/Context';
import { FinalizarCompra } from "../JS/Carrito";

//instanciar el contexto de los productos para mostrarlos y cuando le das a confimar comprar enviarlos a firebae
//con la funcion Finalizar Compra
// Una vez que esta todo ok redireccionar a la pagina principal y boorar los datos del context navigate("/");

const Cart = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [email, setEmail] = useState('');

  // Obtén el contexto de los productos del carrito
  const [cart] = useContext(CartContext);

  const navigate = useNavigate();

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

      // Ejemplo de mensaje de compra finalizada (debes implementar la lógica real aquí)


      Swal.fire({
        title: 'Compra finalizada',
        text: `¡Gracias por tu compra, ${nombre} ${apellido}! Hemos enviado la confirmación a ${email}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });

      // Redirige al usuario a la página principal
      navigate("/");
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {/* Aquí mostrar el contenido del carrito */}
      <div>
        {/* Elementos del carrito van aquí */}
      </div>
      
      
    </div>
  );
};


export default Cart;
