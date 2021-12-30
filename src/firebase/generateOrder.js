import { db } from './config'
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'


export const generateOrder = async (values, cart, totalCart, emptyCart) => {

        const order = {
            buyer: { ...values },
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'productos')
        const q = query(productsRef, where(documentId(), 'in', cart.map(el => el.id)))

        const outOfStock = []

        const products = await getDocs(q)

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.itemQty) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.itemQty
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

            if (outOfStock.length === 0) {
                addDoc(ordersRef, order)
                    .then((res) => {
                        batch.commit()
                        Swal.fire({
                            icon: 'success',
                            title: 'Su orden ha sido registrada',
                            text: `Su ID de orden es: ${res.id}`
                        })
                        emptyCart()
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No hay stock de los siguientes productos:',
                    text: outOfStock.map(el => el.name).join(', ')
                })
            console.log(outOfStock)
            }
    }