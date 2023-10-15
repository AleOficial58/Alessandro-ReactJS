import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Contexts/Context';
import { Box, Button, Center, Container, Stack, Text } from "@chakra-ui/react";

//instanciar el contexto de los productos para mostrarlos y cuando le das a confimar comprar enviarlos a firebae
//con la funcion Finalizar Compra
// Una vez que esta todo ok redireccionar a la pagina principal y boorar los datos del context navigate("/");

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    calcularTotal()
  }, [cart])

  const eliminar = (id) => {
    const resultadoEliminar = cart.filter(item => item.id != id);
    setCart(resultadoEliminar)
  }

  const calcularTotal = () => {
    let totalPrecio = 0
    cart.forEach(item => {
      totalPrecio += item.precio * item.cantidad
    })
    setTotal(totalPrecio)
  }

  const vaciarCarrito = () => {
    setCart([])
    setTotal(0)
  }

  const navigate = useNavigate();
  return (
    <Box padding="4">
      {cart.map((item) => {
        return (
          <Stack direction={['column', 'row']} spacing='24px' pt="4">
            {/* <div key={item.id}> */}
            <Box minW="160px">
              <img src={item.Imagen} width="160" height="85" />
            </Box>
            <Center>
              <Box minW="260px">
                <p>{item.nombre}</p>
              </Box>
            </Center>
            <Center>
              <Box minW="260px">
                <p>${item.precio}</p>
              </Box>
            </Center>
            <Center>
              <Box minW="260px">
                <p>Cantidad:{item.cantidad}</p>
              </Box>
            </Center>
            <Center>
              <Box minW="260px">
                <p>SubTotal:{item.cantidad * item.precio}</p>
              </Box>
            </Center>
            <Center>
              <Box minW="260px">
                <Button colorScheme='red' onClick={() => eliminar(item.id)}>Eliminar</Button>
              </Box>
            </Center>
          </Stack>
        )
      })}

      <Box pt="4">
        <Text>Total a pagar: {total}</Text>
      </Box>
      
      <Stack direction={['column', 'row']} spacing='24px' pt="4">
        <Button colorScheme='red' onClick={() => vaciarCarrito()}>Vaciar Carrito</Button>
        <Button colorScheme='blue' onClick={() => navigate('/checkout')} disabled={cart.length === 0}>Comprar</Button>
      </Stack>
    </Box>
  );
};


export default Cart;