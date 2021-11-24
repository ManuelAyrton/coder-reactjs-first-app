import React, { useEffect, useState } from 'react'
import { pedirUnDato } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'




export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})


    useEffect(() => {

        setLoading(true)
        pedirUnDato(1)
            .then( (response) => {
                setProduct(response)
            })
            .catch ( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])


    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <>
                        <ItemDetail key={product.id} product={product} />
                    </>
            }
        </>
    )
}
