import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import './Item.scss'

export const Item = ({prod}) => {

    return (
        <>
            <Card className="my-3 mx-auto cardContainer" style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Img variant="top" className="cardImg mt-2" src={prod.img} alt={prod.name} />
                    <Card.Title className="mt-3">{prod.name}</Card.Title>
                    <Card.Text>
                        {prod.desc}
                    </Card.Text>
                    <ItemCounter prod={prod}/>
                </Card.Body>
            </Card>
        </>
    )
}
