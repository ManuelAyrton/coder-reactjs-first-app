import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirUnDato } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'



export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)
        pedirUnDato(itemId)
            .then((resp) => {
                setProduct(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])


    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <>
                        <ItemDetail key={product.id} product={product} />
                    </>
            }
        </>
    )
}
