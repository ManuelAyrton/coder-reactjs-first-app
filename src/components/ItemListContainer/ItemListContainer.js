import { Container } from 'react-bootstrap'
import { ProductCard } from '../ProductCard/ProductCard'
import './ItemListContainer.scss'
import Buzo from "../../assets/products/buzo.jpg"
import Campera from "../../assets/products/campera.jpg"
import Cargo from "../../assets/products/cargo.jpg"

export const ItemListContainer = ({greeting}) => {


    return (
        <Container className="ItemListContainer mt-5">
            <h1>{greeting}</h1>
            <hr/>
            <div className="row row-grid justify-content-between">
                <ProductCard src={Buzo} product="BUZO" stock="6"/>
                <ProductCard src={Campera} product="CAMPERA" stock="4"/>
                <ProductCard src={Cargo} product="CARGO" stock="2"/>
            </div>
        </Container>
    )
}
