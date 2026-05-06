import { useEffect, useState } from "react"

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Array<any>>([])

  useEffect(() => {

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((resp: Response) => {
    //     return resp.json()
    //   })
    //   .then((data: Array<any>) => {
    //     console.log(data)
    //     setUsuarios(data)
    //   })

    const loadUsuarios = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      console.log(data)
      setUsuarios(data)
    }

    loadUsuarios()

  }, [])

  const elementosUsuarios = usuarios.map((usuario: any) => {
    return <li key={usuario.id}>{usuario.name}</li>
  })

  return (
    <div>
      <ul>
        {elementosUsuarios}
      </ul>
    </div>
  )
}