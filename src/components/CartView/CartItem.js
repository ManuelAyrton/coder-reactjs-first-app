import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../context/CartContext/CartContext'
import './CartItem.scss'

export const CartItem = ({ name, price, items, id, imgSm }) => {

    const { removeFromCart } = useContext(CartContext)

    return (
        <>
            <hr />
            <div key={id} className="container cartItem">
                <img className="cartItemImg" src={imgSm} alt={name} />
                <h3 className="cartItemName">{name}</h3>
                <p className="cartItemQty">x{items}</p>
                <p className="cartItemPrice">$ {price}</p>
                <button
                    className="btn btn-danger FaTrashAlt"
                    onClick={() => { removeFromCart(id) }}
                ><FaTrashAlt /></button>
            </div>
        </>
    )
}
