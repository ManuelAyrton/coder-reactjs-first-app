import React, { useEffect } from 'react'
import './ItemCounter.scss'
import Button from 'react-bootstrap/Button'
import { btnConfig } from './btnConfig'




export const ItemCounter = ({ stock, itemQty, setItemQty, handleAdd }) => {


    const addItem = () => {
        if (stock > itemQty) {
            setItemQty(itemQty + 1)
        } else {
            alert("No hay más stock.")
        }
    }

    const removeItem = () => {
        if (itemQty > 0) {
            setItemQty(itemQty - 1)
        } else {
            alert("No se puede disminuir más.")
        }

    }

    useEffect(() => {
        console.log("Items actualizados.")
    }, [itemQty])

    const respuesta = () => {
        if (itemQty === 1) {
            alert(`Agregaste ${itemQty} item.`)
        } else {
            alert(`Agregaste ${itemQty} items.`)
        }
    }

    const config = btnConfig(itemQty, stock, removeItem, addItem)

    return (
        <>
            <div className="qtyContainer">Cant: {itemQty}</div>
            <div className="buttonsContainer mb-3 justify-content-center">
                <Button {...config.remove}>
                    -
                </Button>

                <Button
                    variant="success"
                    className="btnAddToCart"
                    disabled={itemQty === 0}
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
