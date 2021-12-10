import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import { doc, getDoc, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, 'productos')
        const docRef = doc(productsRef, itemId)

        getDoc(docRef)
            .then((doc) => {
                setProduct({
                    id: doc.id,
                    ...doc.data()
                })
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
                        <ItemDetail {...product} />
                    </>
            }
        </>
    )
}
