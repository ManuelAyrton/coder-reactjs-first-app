// import React, { useState } from 'react'



// export const Form = () => {

//     const [values, setValues] = useState({
//         nombre: '',
//         apellido: '',
//         email: '',
//     })


//     const handleInputChange = (e) => {
//         console.log(e.target.name)

//         setValues({
//             ...values,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         console.log(values.nombre)
//         console.log(values.apellido)
//         console.log(values.email)
//         console.log("submitted")
//     }





//     return (
//         <form className="container m-5 m-auto" onSubmit={handleSubmit}>
//             <input
//                 onChange={handleInputChange}
//                 name="nombre"
//                 value={values.nombre}
//                 className="form-control my-2"
//                 type="text"
//                 placeholder="nombre"
//             />
//             <input
//                 onChange={handleInputChange}
//                 name="apellido"
//                 value={values.apellido}
//                 className="form-control my-2"
//                 type="text"
//                 placeholder="apellido"
//             />
//             <input
//                 onChange={handleInputChange}
//                 name="email"
//                 value={values.email}
//                 className="form-control my-2"
//                 type="email"
//                 placeholder="email"
//             />

//             <button type="submit" className="btn btn-primary">Enviar</button>
//         </form>
//     )
// }
