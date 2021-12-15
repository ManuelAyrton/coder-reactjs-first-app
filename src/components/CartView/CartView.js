import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext/CartContext'
import { CartItem } from './CartItem'
import './CartView.scss'

export const CartView = () => {

    const { cart, emptyCart, totalCart } = useContext(CartContext)

    return (
        <div className="mt-4">
            {
                cart.length > 0
                    ? <>
                        <h2 >Carrito</h2>

                        <section>
                            {
                                cart.map((prod) => <CartItem {...prod} />)
                            }
                        </section>

                        <hr />

                        <div className="container totalPrice">TOTAL: <span>$ {totalCart()}</span></div>

                        <hr/>

                        <div>
                            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                            <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                        </div>
                    </>

                    : <>
                        <h2>No agregaste items al carrito al carrito aún</h2>
                        <hr/>
                        <Link to="/" className="btn btn-secondary">Volver</Link>
                    </>
            }

        </div >
    )
}
