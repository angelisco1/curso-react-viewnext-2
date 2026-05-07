import { useState } from "react"
import { CmpA } from "./CmpA"
import { LangContext } from "./contexts/LangContext"

export const Tema09ContextAPI = () => {
  const [lang, setLang] = useState<string>('es')
  
  
  return (
    <div>
      <h2>Tema 09: context api (useContext)</h2>

      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>

      <p>Lenguaje seleccionado: {lang}</p>


      <LangContext.Provider value={{lang}}>
        <CmpA />
        {/* <CmpD /> */}
      </LangContext.Provider>

      {/* <CmpC /> */}
      


    </div>
  )
}