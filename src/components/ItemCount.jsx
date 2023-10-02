import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'
import { CartContext } from '../Contexts/Context'

const ItemCount = ({ producto }) => {
    const [contador, setContador] = React.useState(0)
    const [cart, setCart] = React.useContext(CartContext)

    React.useEffect(() => {

    }, [])
    //Funcion para sumar en el contador hasta maximo 10 unidades
    const sumarContador = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    //Funcion para restar el contador hasta 0
    const restarContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if (contador > 0) {
            debugger
            let prod = {
                idProducto: producto.id,
                cantidad: contador,
                precio: producto.precio
            }
            debugger
            setCart([...cart, prod])
        }
    }

    //Primero tenes que ver si en el carrito ya existe el producto que estas queriendo agregar, 
    //si existe le sumas uno, sino agregar la cantidad que elegiste.

    return (
        <>
            <div className='contador'>
                <p>precio: {producto?.precio}</p>
                <Button id='botonsuma' colorScheme='blue' onClick={sumarContador}>+</Button>
                <h4 className='numeroContador' >{contador}</h4>
                <Button id='botonresta' colorScheme='red' onClick={restarContador}>-</Button>
                <Spacer />
                <Button id='botonAlert' colorScheme='green' onClick={onAdd}>Agregar a Carrito</Button>
            </div>
        </>
    )
}

export default ItemCount