import { stock } from "../assets/data/stock"
import { itemId } from "../components/ItemDetailContainer/ItemDetailContainer.js"

export const pedirDatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)

    })
}

export const pedirUnDato = (itemId) => {


    return new Promise (( resolve, reject ) => {
        setTimeout(() => {
            const foundProduct = stock.find( prod => prod.id === Number(itemId) )
            resolve(foundProduct)
        }, 2000)

    })
}