import { Container } from 'react-bootstrap'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { useProducts } from '../../hooks/useProducts'



export const ItemListContainer = ({greeting}) => {


    const { catId } = useParams()
    const { loading, products } = useProducts(catId)

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
