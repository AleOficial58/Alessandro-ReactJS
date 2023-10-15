import React from 'react'
export const CartContext = React.createContext(null)

export const ShopContext = ({ children }) => {
    const [cart, setCart] = React.useState([])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}


/*4.1 Final Version | Final Development Project 4/4*/