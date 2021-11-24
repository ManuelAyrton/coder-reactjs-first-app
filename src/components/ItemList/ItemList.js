import React from 'react'
import { Item } from '../Item/Item'


export const ItemList = ({ products }) => {
    return (
            <div className="row row-grid justify-content-between">
                {products.map((prod) => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </div>
    )
}
