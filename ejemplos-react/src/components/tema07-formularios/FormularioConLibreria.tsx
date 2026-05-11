import { type SubmitEvent } from "react"
import { useInputField } from "./hooks/useInputField"
import { useForm } from "react-hook-form"
import { Validations } from "./utils/validations"

type Inputs = {
  nombre: string,
  email: string,
  password: string,
}

export const FormularioConLibreria = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()


  // const miHandleSubmit = (event) => {
  //   event.preventDefault()
  //   return (okFn, malFn) => {
  //     if (hayErrores) {
  //       malFn(errores)
  //     } else {
  //       okFn(datos)
  //     }
  //   }
  // }
  

  const enviarDatos = (data: Inputs) => {
    console.log(data)

    console.log('Aquí tendríamos que enviar estos datos a algún sitio')
  }

  const mostrarErrores = (errores: any) => {
    console.log(errores)
  }
  
  return (
    <div>
      <h3>Formulario con librería: react-hook-form</h3>

      <form onSubmit={handleSubmit(enviarDatos, mostrarErrores)}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" {...register('nombre', { minLength: 3 })} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email', { pattern: /\w+@\w+\.\w+/ })} />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" {...register('password')} />
        </div>

        <div>
          <button type="submit">Registro</button>
        </div>
      </form>
      
    </div>
  )
}