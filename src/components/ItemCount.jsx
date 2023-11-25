import React from 'react';
import { Button, Spacer } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { CartContext } from '../Contexts/Context';

const ItemCount = ({ producto }) => {
    const [contador, setContador] = React.useState(0);
    const [cart, setCart] = React.useContext(CartContext);

    const sumarContador = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    };

    const restarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const onAdd = () => {
        if (contador > 0) {
            let prod = {
                ...producto,
                cantidad: contador,
            };
            if (cart.filter(item => item.id === producto.id).length > 0) {
                let carrito = cart;
                carrito
                    .filter(item => item.id === producto.id)
                    .map(pro => {
                        pro.cantidad += contador;
                    });
                setCart(carrito);
            } else {
                setCart([...cart, prod]);
            }
            setContador(0);

            // Mostrar Sweet Alert
            Swal.fire({
                icon: 'success',
                title: '¡Producto agregado al carrito!',
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    return (
        <>
            <div className='contador'>
                <p>precio: {producto?.precio}</p>
                <Button id='botonsuma' colorScheme='blue' onClick={sumarContador}>
                    +
                </Button>
                <h4 className='numeroContador'>{contador}</h4>
                <Button id='botonresta' colorScheme='red' onClick={restarContador}>
                    -
                </Button>
                <Spacer />
                <Button id='botonAlert' colorScheme='green' onClick={onAdd}>
                    Agregar a Carrito
                </Button>
            </div>
        </>
    );
};

export default ItemCount;
