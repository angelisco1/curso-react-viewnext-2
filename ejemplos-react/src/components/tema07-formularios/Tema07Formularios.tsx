import { useState } from "react"

export const Tema07Formularios = () => {
  // const [formData, setFormData] = useState<any>({
  //   nombre: '',
  //   email: '',
  //   password: ''
  // })

  const [nombre, setNombre] = useState<string>('angel')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    console.log({
      nombre,
      email,
      password
    })
  }
  
  return (
    <div>
      <h2>Tema 07: formularios</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <button type="submit">Registro</button>
        </div>
      </form>
      
    </div>
  )
}