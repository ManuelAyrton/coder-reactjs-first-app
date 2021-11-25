import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import './CartWidget.scss'

export const CartWidget = () => {
    return (
        <Link className="cartWidgetContainer mt-sm-2 mt-lg-0 mx-sm-auto mx-lg-4" to="/cart">
            <div className="CartWidget ">
                <FiShoppingCart/>
            </div>
        </Link>
    )
}
