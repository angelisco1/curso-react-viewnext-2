import { useState } from "react"
import { Contador } from "./Contador"
import { ContadorSinEstado } from "./ContadorSinEstado"

export const Tema05Estado = () => {

  const [cuenta, setCuenta] = useState<number>(2)

  return (
    <div>
      <h2>Tema 05: estado (useState)</h2>

      <Contador />

      <ContadorSinEstado
        cuenta={cuenta}
        onChangeCuenta={(nuevaCuenta: number) => setCuenta(nuevaCuenta)} />

    </div>
  )
}