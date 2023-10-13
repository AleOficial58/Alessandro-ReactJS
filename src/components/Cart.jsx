import React, {  useContext } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Contexts/Context';

//instanciar el contexto de los productos para mostrarlos y cuando le das a confimar comprar enviarlos a firebae
//con la funcion Finalizar Compra
// Una vez que esta todo ok redireccionar a la pagina principal y boorar los datos del context navigate("/");

const Cart = () => {
  const [cart] = useContext(CartContext);
  
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {/* Aquí mostrar el contenido del carrito */}
      <div>
      {cart.map((item)=>{
          return(
          <div key={item.id}>
          <p>{item.nombre}</p>
          <p>{item.precio}</p>
          <p>{item.cantidad}</p>
          <button>Eliminar</button>
          </div>
          )
          })}
      </div>
      <button>Vaciar Carrito</button>
      <button onClick={()=> navigate('/checkout')}>Terminar Compra</button>
    </div>
  );
};


export default Cart;