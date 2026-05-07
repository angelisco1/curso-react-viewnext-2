import { useEffect, useRef, useState, type SubmitEvent } from "react"
import { useInputField } from "./hooks/useInputField"

export const FormularioNoControlado = () => {
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({
      nombre: nombreRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    })

    console.log('Aquí tendríamos que enviar estos datos a algún sitio')
  }
  
  return (
    <div>
      <h3>Formulario controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" ref={nombreRef} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <div>
          <button type="submit">Registro</button>
        </div>
      </form>
      
    </div>
  )
}