import { stock } from "../assets/data/stock"


export const pedirDatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)

    })
}

export const pedirUnDato = (id) => {
    return new Promise (( resolve, reject ) => {
        setTimeout(() => {
            const foundProduct = stock.find(p => p.id === id)
            resolve(foundProduct)
        }, 2000)

    })
}