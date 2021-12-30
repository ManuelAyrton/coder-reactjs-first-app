import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext/CartContext'
import { generateOrder } from '../../firebase/generateOrder.js'
import './Checkout.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'


const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio.')
                .min(3, 'Demasiado corto.')
                .max(20, 'Demasiado largo.'),
    apellido: Yup.string()
                .required('Este campo es obligatorio.')
                .min(3, 'Demasiado corto.')
                .max(20, 'Demasiado largo.'),
    email: Yup.string()
                .required('Este campo es obligatorio.')
                .email('Email inválido.'),
    emailConfirm: Yup.string()
                .required('Este campo es obligatorio.')
                .oneOf([Yup.ref('email'), null], 'Los emails no coinciden.')
})

export const Checkout = () => {

    const { cart, totalCart, emptyCart } = useContext(CartContext)

    const initialValues = {
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    }


    return (

        <> {cart.length === 0
            ? <Navigate to="/" />
            : <div className='container mt-5'>
                <h2>Complete sus datos para realizar su pedido.</h2>
                <hr />

                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        generateOrder(values, cart, totalCart, emptyCart)
                    }}
                >
                    {(formik) => (

                        <form className="container m-5 m-auto formDiv" onSubmit={formik.handleSubmit}>

                            <div className='formDivFormik'>
                                <input
                                    onChange={formik.handleChange}
                                    name="nombre"
                                    value={formik.values.nombre}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="Nombre/s"
                                />
                                {formik.errors.nombre && <small>{formik.errors.nombre}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="apellido"
                                    value={formik.values.apellido}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="Apellido/s"
                                />
                                {formik.errors.apellido && <small>{formik.errors.apellido}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="email"
                                    value={formik.values.email}
                                    className="form-control my-2"
                                    type="email"
                                    placeholder="Email"
                                />
                                {formik.errors.email && <small>{formik.errors.email}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="emailConfirm"
                                    value={formik.values.emailConfirm}
                                    className="form-control my-2"
                                    type="email"
                                    placeholder="Repetir email"
                                />
                                {formik.errors.emailConfirm && <small>{formik.errors.emailConfirm}</small>}
                            </div>

                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    )}
                </Formik>
            </div>
        }
        </>
    )
}
