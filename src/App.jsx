import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect } from 'react'

//los props son para pasar el state entre componentes se pasan del padre al hijo no al reves

function App() {

 const [pacientes,setPacientes] = useState([JSON.parse(localStorage.getItem('pacientes')) ?? []])
 const [paciente, setPaciente] = useState({})

 //este es al principio para que no guarde el objeto vacio cuando reinicie
//  useEffect(() => {
//   const obtenerLS = () => {
//     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
//       setPacientes(pacientesLS)
//   }
//   obtenerLS();
//  }, [])
 //cuando s ele pasa esto significa que se ejecutara una sola vez y no mas

 //aqui guardo en localstorage, y uso useEffect porque solo se guarde cuando hay un cambio en el objeto pacientes
useEffect(() => {

    localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes])


 const eliminarPaciente = id => {
  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)

 }

//  const toma1Valor = (valor) => {//de esta manera paso un prop del  hijo al padre
//   console.log(valor)
//  }

  return (
    <div className="container mx-auto mt-20">
   <Header 
    // toma1Valor={toma1Valor}
    

   />

   <div className="mt-12 md:flex">
      <Formulario 
      setPacientes={setPacientes} 
      pacientes={pacientes} 
      paciente={paciente}
      setPaciente={setPaciente}
      />

      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      paciente={paciente}
      eliminarPaciente={eliminarPaciente}
      />
      

   </div>
  
    </div>
  )
}

export default App
