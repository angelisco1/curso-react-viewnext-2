import { useEffect, useMemo, useReducer, useState, type ActionDispatch } from "react"
import './Tema10OtrosHooks.css'

interface CoordenadasCaja {
  posY: number,
  posX: number,
}

interface Action {
  key: string
}

const fnReducer = (state: CoordenadasCaja, action: Action): CoordenadasCaja => {

  switch (action.key) {
    case 'ArrowUp':
      return {
        ...state,
        posY: state.posY - 5
      }
    case 'ArrowDown':
      return {
        ...state,
        posY: state.posY + 5
      }
    case 'ArrowLeft':
      return {
        ...state,
        posX: state.posX - 5
      }
    case 'ArrowRight':
      return {
        ...state,
        posX: state.posX + 5
      }
    default:
      return state
  }
}


export const Tema10OtrosHooks = () => {
  const [nombre, setNombre] = useState('Charly')
  const [apellido, setApellido] = useState('Falco')
  
  const [posicion, dispatch] = useReducer<CoordenadasCaja, any>(fnReducer, {posY: 0, posX: 0})
  // useState({posY: 0, posX: 0})

  const moverCaja = (event: any) => {
    console.log(event.code)
    dispatch({key: event.code})
  }

  useEffect(() => {
    window.addEventListener('keyup', moverCaja)

    return () => {
      window.removeEventListener('keyup', moverCaja)
    }
  }, [])
  
  // const getNombreCompleto = () => {
  //   console.log('Calcula el nombre completo')
  //   return nombre + ' ' + apellido
  // }
  // const nombreCompleto = getNombreCompleto()

  const nombreCompleto = useMemo(() => {
    console.log('Calcula el nombre completo')
    return nombre + ' ' + apellido
  }, [nombre, apellido])
  
  return (
    <div>
      <h2>Tema 10: otros hooks</h2>

      <h3>useReducer</h3>

      <div className="caja" style={{
          top: posicion.posY + 'px',
          left: posicion.posX + 'px'
        }}></div>


      <h3>useMemo</h3>
      
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

      <p>Nombre completo: {nombreCompleto}</p>


    </div>
  )
}