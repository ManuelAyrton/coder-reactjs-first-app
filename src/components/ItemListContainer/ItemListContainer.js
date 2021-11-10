import { Container } from 'react-bootstrap'
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {


    return (
        <Container className="ItemListContainer mt-5">
            <h1>{greeting}</h1>
            <hr/>
        </Container>
    )
}
