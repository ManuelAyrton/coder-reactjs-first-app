import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext/CartContext'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import './itemDetail.scss'


export const ItemDetail = ({ id, name, imgSm, imgLg, desc, price, stock }) => {

    const {addToCart, isInCart} = useContext(CartContext)


    const [itemQty, setItemQty] = useState(0)

    const handleAdd = () => {
        if (itemQty > 0) {
            addToCart({
                id,
                name,
                price,
                imgSm,
                itemQty
            })
        }
    }

    return (
        <Container key={id} className="py-5 " >
            <div className="d-flex flex-sm-column flex-lg-row justify-content-center" >
                <img className="itemDetailImg mx-5" src={imgLg} alt={name} />
                <div className="itemInfoContainer mt-5 flex-sm-row flex-lg-column">
                    <div>
                        <div className="itemDetailTitle" >{name}</div>
                        <div className="itemDetailDesc" >{desc}</div>
                        <p className="itemDetailPrice my-1 " >Precio: <span>$ {price}</span></p>
                    </div>
                    <div>

                        {
                            !isInCart(id)
                                ? <>
                                    <div>Stock: {stock}</div>
                                    <ItemCounter stock={stock} itemQty={itemQty} setItemQty={setItemQty} handleAdd={handleAdd} />
                                </>

                                : <Link to="/cart" className="btn btn-success"> Terminar mi compra</Link>
                        }

                    </div>
                </div>
            </div>
        </Container>
    )
}

