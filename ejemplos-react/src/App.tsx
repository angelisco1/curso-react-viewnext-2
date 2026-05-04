import './App.css'
import { Tema01ComponentesJSX } from './components/tema01-componentes-jsx/Tema01ComponentesJSX'
import { Tema02Propiedades } from './components/tema02-propiedades/Tema02Propiedades'

function App() {

  // React.Fragment -> <></>
  return (
    <div>
      <h1>Curso de React</h1>

      {/* <Tema01ComponentesJSX /> */}
      <Tema02Propiedades />

      {/* <Tema03Eventos /> */}

    </div>
  )
}

export default App
