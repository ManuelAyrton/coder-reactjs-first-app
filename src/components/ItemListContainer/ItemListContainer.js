import { Container } from 'react-bootstrap'
import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'



export const ItemListContainer = ({greeting}) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { catId } = useParams()


    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setProducts(resp)
                } else {
                    setProducts( resp.filter( prod => prod.category ===catId) )
                }

            })
            .catch( (error) => {
                console.log(error)
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
