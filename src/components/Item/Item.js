import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.scss'


export const Item = ({prod}) => {

    return (
        <>
            <Link to={`/detail/${prod.id}`} className="itemLinkContainer mx-auto">
                <Card className="mx-auto cardContainer" style={{  }} >
                    <Card.Body>
                        <div>
                            <Card.Img variant="top" className="cardImg mt-2" src={prod.imgSm} alt={prod.name} />
                            <Card.Title className="mt-3 cardTitle">{prod.name}</Card.Title>
                            <Card.Text>
                                {prod.desc}
                            </Card.Text>
                        </div>
                        <Card.Text className="cardPrice">Precio: <span>$ {prod.price}</span></Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}
