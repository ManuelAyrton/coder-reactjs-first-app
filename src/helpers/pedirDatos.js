import { stock } from "../assets/data/stock"


export const pedirDatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)

    })
}