import React, { createContext, useState } from 'react'

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartProvider