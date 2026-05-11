import { useNavigate } from "react-router"

export const NuevoPost = () => {
  const navigate = useNavigate()
  
  
  const guardarPost = () => {
    console.log('Guardando el post...')
    setTimeout(() => {
      console.log('Se ha guardado correctamente :)')
      // navegar a /home
      navigate('/home')
    }, 1500)
  }
  
  return (
    <div>
      <h3>Nuevo post</h3>

      <p>Aquí habría un formulario...</p>
      <button type="button" onClick={guardarPost}>Guardar</button>
      
    </div>
  )
}