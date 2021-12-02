import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../context/CartContext/CartContext'

export const CartItem = ({ name, price, items, id }) => {

    const { removeFromCart } = useContext(CartContext)

    return (

        <div key={id}>
            <h3>{name}</h3>
            <p>Precio: $ {price}</p>
            <p>Cantidad: {items}</p>
            <button
                className="btn btn-danger"
                onClick={() => { removeFromCart(id) }}
            ><FaTrashAlt /></button>
        </div>

    )
}
