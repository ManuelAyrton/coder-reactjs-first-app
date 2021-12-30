import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'


export const useProducts = (catId) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)

        // 1 - Armar la referencia
        const productsRef = collection(db, 'productos')
        const q = catId ? query(productsRef, where('category', '==', catId)) : productsRef
        // 2 - GET a esa referencia
        getDocs(q)
            .then((collection) => {
                const productsFB = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(productsFB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return {
        loading,
        products
    }
}
