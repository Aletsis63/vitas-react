import React from 'react'
import Paciente from './Paciente'
// import {useEffect} from 'react'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  // useEffect(() => {
  //   if(pacientes.length > 0) {
  //   console.log(' nuevo paciente');
  //   }
  // },[pacientes])
  
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>

      {pacientes && pacientes.length ? (
        <>

      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-3xl mt-5 mb-10 text-center'>
          Administra tus {' '}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      {/* .map sirve para iterar en un arreglo y tambien lo retorna */}
      {pacientes.map( (paciente) => (
        // <h1>{paciente.nombre}</h1>
        <Paciente
          key={paciente.id}//siempre que muestre un listado con un map tiene que llevar key
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        
      )
      )}
      
</>

      ): (
        <>
          <h2 className='font-black text-3xl text-center'>No hay paceintes</h2>
<p className='text-3xl mt-5 mb-10 text-center'>
    Comineza agregando pacientes {' '}
    <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
</p>
        </>
      )}

        
       
       
    </div>
  )
}

export default ListadoPacientes
