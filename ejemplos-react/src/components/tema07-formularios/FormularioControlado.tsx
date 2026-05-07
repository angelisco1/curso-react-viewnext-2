import { useEffect, useState, type SubmitEvent } from "react"
import { useInputField } from "./hooks/useInputField"

export const FormularioControlado = () => {
  // const [formData, setFormData] = useState<any>({
  //   nombre: '',
  //   email: '',
  //   password: ''
  // })

  // const [nombre, setNombre] = useState<string>('angel')
  // const [email, setEmail] = useState<string>('')

  const [nombre, setNombre, erroresNombre] = useInputField('Ángel', { minLength: 3 })
  const [email, setEmail, erroresEmail] = useInputField('', {
    email: true,
  })

  const [password, setPassword, erroresPassword] = useInputField('', {
    mayus: true,
    minLength: 5,
    numbers: false
  })
  // const [password, setPassword] = useState<string>('')
  // const [erroresPassword, setErroresPassword] = useState<Array<string>>([])
  // useEffect(() => {
  //   const listaErrores = []
    
  //   if (password.toLocaleLowerCase() === password) {
  //     listaErrores.push('Tiene que tener mayúsculas')
  //   }

  //   if (password.length < 8) {
  //     listaErrores.push('Tiene que tener al menos 8 caracteres')
  //   }

  //   if (!/\d+/.test(password)) {
  //     listaErrores.push('Tiene que tener al menos un número')
  //   }

  //   setErroresPassword(listaErrores)
  // }, [password])

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({
      nombre,
      email,
      password
    })

    console.log('Aquí tendríamos que enviar estos datos a algún sitio')
  }
  
  return (
    <div>
      <h3>Formulario controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

          {erroresNombre.length > 0 && <ul>
            {erroresNombre.map((err: string, i: number) => <li key={i}>{err}</li>)}
          </ul>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          {erroresEmail.length > 0 && <ul>
            {erroresEmail.map((err: string, i: number) => <li key={i}>{err}</li>)}
          </ul>}

        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {erroresPassword.length > 0 && <ul>
            {erroresPassword.map((err: string, i: number) => <li key={i}>{err}</li>)}
          </ul>}

        </div>

        <div>
          <button type="submit">Registro</button>
        </div>
      </form>
      
    </div>
  )
}