import React, { useState, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { Form, useNavigate } from "react-router-dom";
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

  const handleFinalizarCompra = (e) => {
    e.preventDefault();
    //VALIDAR PRODUCTO
    debugger
    if (cart.length === 0) {
      setLoading(false)
      Swal.fire({
        title: 'Error',
        text: 'Debes agregar productos para realizar la compra',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return
    }

    if (nombre.trim() === '' || apellido.trim() === '' || dni.trim() === '' || email.trim() === '') {
      setLoading(false)
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return
    }

    setLoading(true)
    FinalizarCompra(cart, nombre, apellido, dni, email)
      .then((id) => {
        debugger
        setLoading(false)
        Swal.fire({
          title: 'Compra finalizada',
          text: `¡Gracias por tu compra, ${nombre} ${apellido}! Hemos enviado la confirmación a ${email}. Tu id de compra es ${id}`,
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
  };

  return (
    <div>
      {/* Formulario para ingresar datos */}
      <h3 className="input-informacion">Información del comprador</h3>
      <div className="input-container">
        <form onSubmit={e => handleFinalizarCompra(e)}>
          <div className="responsive-input-container">
            <Input placeholder="Nombre" type="text" value={nombre} onChange={handleNombreChange} />
          </div>
          <div className="responsive-input-container">
            <Input placeholder="Apellido" type="text" value={apellido} onChange={handleApellidoChange} />
          </div>
          <div className="responsive-input-container">
            <Input placeholder="DNI" type="text" value={dni} onChange={handleDNIChange} />
          </div>
          <div className="responsive-input-container">
            <Input placeholder="Email" type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="responsive-input-container">
            <Button type="submit" disabled={loading}>Finalizar Compra</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
