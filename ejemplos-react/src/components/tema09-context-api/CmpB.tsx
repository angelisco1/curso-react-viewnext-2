import { useContext } from "react"
import { Traductor } from "./utils/traductor"
import { LangContext } from "./contexts/LangContext"

export const CmpB = () => {
  const langCtx = useContext(LangContext)
  console.log('langCtx', langCtx)

  const bienvenidoTxt = Traductor.traducir('bienvenido', langCtx?.lang ?? 'es')
  
  return (
    <div>
      <h4>B</h4>

      <p>{bienvenidoTxt} Charly</p>
    </div>
  )
}