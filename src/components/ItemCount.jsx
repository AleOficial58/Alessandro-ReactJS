import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'

const ItemCount = () => {

const [contador, setContador] = useState (0)

//Funcion para sumar en el contador hasta maximo 10 unidades
const sumarContador = () => {
    if(contador < 10){
        setContador (contador + 1)
    }
}

//Funcion para restar el contador hasta 0
const restarContador = () => {
    if (contador > 0){
        setContador (contador - 1)
    }
}

const onAdd = () => {
    if(contador > 0){
        alert(`Agregaste ${contador} items al carrito`)
    }
    
}
return (
<>
    <div className = 'contador'>
    <Button id='botonsuma' colorScheme='blue'onClick={sumarContador}>+</Button>
    <h4 className='numeroContador' >{contador}</h4> 
    <Button id='botonresta' colorScheme='red' onClick={restarContador}>-</Button>
    <Spacer/>
    <Button id='botonAlert' colorScheme='green' onClick={onAdd}>Agregar a Carrito</Button>
    </div>
</>
)
}

export default ItemCount