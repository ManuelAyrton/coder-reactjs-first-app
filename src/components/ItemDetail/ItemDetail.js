import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext/CartContext'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import './itemDetail.scss'


export const ItemDetail = ({ product }) => {

    const {addToCart, isInCart} = useContext(CartContext)


    const [items, setItems] = useState(0)

    const handleAdd = () => {
        if (items > 0) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                imgSm: product.imgSm,
                items
            })
        }
    }

    return (
        <Container key={product.id} className="py-5 " >
            <div className="d-flex flex-sm-column flex-lg-row justify-content-center" >
                <img className="itemDetailImg mx-5" src={product.imgLg} alt={product.name} />
                <div className="itemInfoContainer mt-5 flex-sm-row flex-lg-column">
                    <div>
                        <div className="itemDetailTitle" >{product.name}</div>
                        <div className="itemDetailDesc" >{product.desc}</div>
                        <p className="itemDetailPrice my-1 " >Precio: <span>$ {product.price}</span></p>
                    </div>
                    <div>

                        {
                            !isInCart(product.id)
                                ? <>
                                    <div>Stock: {product.stock}</div>
                                    <ItemCounter prod={product} items={items} setItems={setItems} handleAdd={handleAdd} />
                                </>

                                : <Link to="/cart" className="btn btn-success"> Terminar mi compra</Link>
                        }

                    </div>
                </div>
            </div>
        </Container>
    )
}

