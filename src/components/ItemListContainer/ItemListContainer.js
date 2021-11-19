import { Container } from 'react-bootstrap'
import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'



export const ItemListContainer = ({greeting}) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])


    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProducts(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <Container className="ItemListContainer mt-5">
            <h1>{greeting}</h1>
            <hr/>

            {
                loading
                ? <h2>Cargando...</h2>
                : <>
                    <ItemList products={products}/>
                </>
            }

        </Container>
    )
}
