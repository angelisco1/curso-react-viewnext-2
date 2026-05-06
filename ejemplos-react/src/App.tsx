import './App.css'
import { Tema01ComponentesJSX } from './components/tema01-componentes-jsx/Tema01ComponentesJSX'
import { Tema02Propiedades } from './components/tema02-propiedades/Tema02Propiedades'
import { Tema03CondicionalesYListas } from './components/tema03-condicionales-y-listas/Tema03CondicionalesYListas'
import { Tema04Eventos } from './components/tema04-eventos/Tema04Eventos'
import { Tema05Estado } from './components/tema05-estado/Tema05Estado'
import { Tema06UseEffect } from './components/tema06-use-effect/Tema06UseEffect'
import { Tema07Formularios } from './components/tema07-formularios/Tema07Formularios'

function App() {

  // React.Fragment -> <></>
  return (
    <div>
      <h1>Curso de React</h1>

      {/* <Tema01ComponentesJSX /> */}
      {/* <Tema02Propiedades /> */}
      {/* <Tema03CondicionalesYListas /> */}
      {/* <Tema04Eventos /> */}
      {/* <Tema05Estado /> */}
      {/* <Tema06UseEffect /> */}

      <Tema07Formularios />
      
    </div>
  )
}

export default App
