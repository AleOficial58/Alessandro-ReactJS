import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { CartContext } from '../Contexts/Context'

const CartWidget = () => {
    const [cart, setCart] = React.useContext(CartContext)
    const [cantidad, setCantidad] = React.useState(0)
    React.useEffect(() => {
        if (cart?.length > 0) {
            let contador = 0
            cart.forEach(element => {
                contador += element.cantidad
            })
            setCantidad(contador)
        } else {
            setCantidad(0)
        }
    }, [cart])

    return (
        <>
            <div className='cartShop'>
                <span className="material-symbols-outlined">
                    shopping_bag
                </span>
                <span className='cartItems'>{cantidad}</span>
            </div>
        </>
    )
}

export default CartWidget