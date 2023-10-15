import React, { useState, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Contexts/Context';
import { FinalizarCompra } from '../JS/Carrito'

function Checkout() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)

  // Obtén el contexto de los productos del carrito
  const [cart, setCart] = useContext(CartContext);

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
    setLoading(true)
    if (nombre.trim() === '' || apellido.trim() === '' || dni.trim() === '' || email.trim() === '') {
      setLoading(false)
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    } else {
      FinalizarCompra(cart, nombre, apellido, dni, email)
        .then(() => {
          setLoading(false)
          Swal.fire({
            title: 'Compra finalizada',
            text: `¡Gracias por tu compra, ${nombre} ${apellido}! Hemos enviado la confirmación a ${email}`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
          });
          setCart([])
          navigate("/");
        })
        .catch(error => {
          setLoading(false)
          Swal.fire({
            title: 'Error',
            text: 'Error al realizar compra',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        })
      // Realiza la lógica para finalizar la compra con los datos ingresados
      // Puedes usar los valores de 'nombre', 'apellido', 'dni' y 'email' en esta función
      // ...

      // Ejemplo de mensaje de compra finalizada (debes implementar la lógica real aquí)


      // Redirige al usuario a la página principal
    }
  };

  return (
    <div>
      {/* Formulario para ingresar datos */}

      <h3>Información del comprador</h3>
      <div className="input-container">
        <Input placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
        <Input placeholder="Apellido" value={apellido} onChange={handleApellidoChange} />
        <Input placeholder="DNI" value={dni} onChange={handleDNIChange} />
        <Input placeholder="Email" value={email} onChange={handleEmailChange} />
        <Button onClick={handleFinalizarCompra} disabled={loading}>Finalizar Compra</Button>
      </div>

      {/* Puedes agregar más componentes y lógica aquí */}
    </div>
  );
}

export default Checkout;
