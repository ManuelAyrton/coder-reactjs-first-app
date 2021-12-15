import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import { db } from '../../firebase/config'
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const { cart, totalCart, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validarDatos(values)) { return }

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

    return (

        <>
            {cart.length === 0
                ? <Navigate to="/" />
                : <div className='container mt-5'>
                    <h2>Resumen de compra</h2>
                    <hr />

                    <form className="container m-5 m-auto" onSubmit={handleSubmit}>

                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control my-2"
                            type="email"
                            placeholder="Repetir email"
                        />
                        {values.emailConfirm !== values.email && <small>Email no coincide</small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}



// cart.forEach((prod) => {
//     const docRef = doc(productsRef, prod.id)
//     getDoc(docRef)
//         .then((doc) => {
//             updateDoc(doc.ref, {
//                 stock: doc.data().stock - prod.cantidad
//             })
//         })
// })