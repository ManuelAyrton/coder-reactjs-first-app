import React, { useEffect, useState } from 'react'
import './ItemCounter.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'


export const ItemCounter = ({producto, stock}) => {

    let [items, setItems] = useState(0)

    console.log(items)

    const addItems = () => {
        if( stock > items ){
        setItems( items + 1 )
        } else{
            alert("No hay más stock.")
        }
    }

    const removeItems = () => {
        if( items > 0 ) {
            setItems( items - 1 )
        } else {
            alert("No se puede disminuir más.")
        }

    }
    useEffect(() => {
        console.log("Me monté")

        return () => {
            console.log("Me desmonté")
        }

    }, [])

    useEffect(() => {
        console.log("Items actualizados.")

    }, [items])

    const respuesta = () => {
        if( items == 0 ) {
            alert("No agregaste nada al carrito!")
        } else {
        alert(`Agregaste ${items} items.`)
        }
    }

    return (
        <Container className="ItemCounterContainer">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{producto}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div className="buttonsContainer">
                        <Button variant="secondary"onClick={removeItems}>-</Button>
                        <div className="">Cant: {items}</div>
                        <Button variant="primary" onClick={addItems}>+</Button>
                    </div>
                    <Button variant="primary" onClick={respuesta}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
