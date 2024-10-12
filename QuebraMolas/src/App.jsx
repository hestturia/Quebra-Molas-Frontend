import CampoInput from "./components/CampoInput/CampoInput"
import Formulario from "./components/Formulario/Formulario"

function App() {
  
  return (
    <>
      <Formulario titulo='Create your free Account'>
          <CampoInput/>
          <CampoInput/>
          <CampoInput/>
      </Formulario>
    </>
  )
}

export default App

