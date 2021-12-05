import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext/CartContext";
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalQty, cart} = useContext(CartContext)

    return (
        <Link className={cart.length === 0 ? 'hidden' : 'cartWidgetContainer mt-sm-2 mt-lg-0 mx-sm-auto mx-lg-4'} to="/cart">
            <div className="cartWidget d-flex align-items-center">
                <FiShoppingCart/>
                <span className="totalQtySpan">{totalQty()}</span>
            </div>
        </Link>
    )
}
