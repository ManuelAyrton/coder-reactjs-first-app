import { Container } from 'react-bootstrap'
import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from'firebase/firestore/lite'
import { db } from '../../firebase/config'



export const ItemListContainer = ({greeting}) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { catId } = useParams()


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


    return (
        <Container className="ItemListContainer my-5">
            <h1>{greeting}</h1>
            <hr className="mb-5"/>

            {
                loading
                ? <Loader/>
                : <>
                    <ItemList products={products}/>
                    <hr className="my-5" />
                </>
            }

        </Container>
    )
}
