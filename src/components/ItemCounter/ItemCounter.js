import React, { useEffect } from 'react'
import './ItemCounter.scss'
import Button from 'react-bootstrap/Button'
import { btnConfig } from './btnConfig'




export const ItemCounter = ({ prod, items, setItems, handleAdd }) => {


    console.log(prod)

    const addItem = () => {
        if (prod.stock > items) {
            setItems(items + 1)
        } else {
            alert("No hay más stock.")
        }
    }

    const removeItem = () => {
        if (items > 0) {
            setItems(items - 1)
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
        if (items === 0) {
            alert("No agregaste nada al carrito!")
        } else if (items === 1) {
            alert(`Agregaste ${items} item.`)
        } else {
            alert(`Agregaste ${items} items.`)
        }
    }

    const config = btnConfig(items, prod, removeItem, addItem)

    return (
        <>
            <div className="qtyContainer">Cant: {items}</div>
            <div className="buttonsContainer mb-3 justify-content-center">
                <Button {...config.remove}>
                    -
                </Button>

                <Button
                    variant="success"
                    className="btnAddToCart"
                    disabled={items === 0}
                    onClick={() => { handleAdd(); respuesta() }}
                >
                    Agregar al carrito
                </Button>

                <Button {...config.add}>
                    +
                </Button>
            </div>
        </>
    )
}
