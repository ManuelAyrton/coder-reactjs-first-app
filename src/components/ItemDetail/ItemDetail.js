import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import './itemDetail.scss'


export const ItemDetail = ({product}) => {

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
                    <div>Stock: {product.stock}</div>
                    <ItemCounter prod={product}/>
                </div>
            </div>
        </div>


    </Container>
    )
}

