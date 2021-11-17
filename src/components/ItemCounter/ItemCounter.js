import React, { useEffect, useState } from 'react'
import './ItemCounter.scss'
import Button from 'react-bootstrap/Button'


export const ItemCounter = ({stock}) => {

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
        if( items === 0 ) {
            alert("No agregaste nada al carrito!")
        } else if ( items === 1 ) {
        alert(`Agregaste ${items} item.`)
        } else {
            alert(`Agregaste ${items} items.`)
        }
    }

    return (
        <>
                <div className="qtyContainer">Cant: {items}</div>
            <div className="buttonsContainer mb-3">
                <Button variant="secondary" className="btnRemoveItem" onClick={removeItems}>-</Button>
                <Button variant="success" className="btnAddToCart" onClick={respuesta}>Agregar al carrito</Button>
                <Button variant="primary" className="btnAddItem" onClick={addItems}>+</Button>
            </div>
        </>
    )
}
