// Estado vs Props
// Mutable - Inmutable

import { useState, type ChangeEvent } from "react"

export const Contador = () => {

  // let cuenta = 0
  // const estadoContador = useState<number>(0)
  // console.log(estadoContador)
  // const cuenta = estadoContador[0]
  // const setCuenta = estadoContador[1]

  const [cuenta, setCuenta] = useState<number>(0)
  
  const incrementar = () => {
    console.log('Incrementando el contador')
    // cuenta = cuenta + 1
    setCuenta(cuenta + 1)
  }

  const decrementar = () => {
    setCuenta(cuenta - 1)
  }
  
  const cambiarCuenta = (event: ChangeEvent) => {
    const nuevaCuenta = Number((event.target as HTMLInputElement).value)
    setCuenta(nuevaCuenta)
  }

  return (
    <div className="d-flex jc-center">
      <button className="mx-1" onClick={decrementar}>-</button>
      <span className="mx-1">{cuenta}</span>
      {/* EJERCICIO: poner un input (campo numerico), y cambiar la cuenta por el valor introducido en el input */}
      <input type="number" onChange={cambiarCuenta} value={cuenta} />
      <button className="mx-1" onClick={incrementar}>+</button>
    </div>
  )
}