import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import './ProductCard.scss'

export const ProductCard = ({product, src, stock}) => {
    return (
        <Card className="my-3 mx-auto cardContainer" style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Img variant="top" className="cardImg mt-2" src={src} />
                <Card.Title className="mt-3">{product}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <ItemCounter stock={stock}/>
            </Card.Body>
        </Card>
    )
}
