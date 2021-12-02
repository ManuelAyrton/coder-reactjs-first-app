import React, { createContext, useState } from 'react'

export const CartContext = createContext()

// custom provider

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalQty = () => {
        return cart.reduce((acc, prod) => acc + prod.items, 0)
    }

    const totalCart = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.items, 0)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            isInCart,
            totalQty,
            totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}