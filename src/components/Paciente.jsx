// import {useEffect}from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    // useEffect(() => {
    //     console.log('elcomponente esta listo')
    // }, [])

const handleEliminar = () => {
    const respuesta = confirm('desea eliminar este paciente')

    if(respuesta){
        eliminarPaciente(id)
    }
}

    console.log(paciente)

    const{nombre, propietario, email, fecha, sintomas,id} = paciente
    // const {nombre} = paciente
  return (
    <div className='mx-5 my-10 bg-white shadow-md py-10 px-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}

                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {" "}

                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {" "}

                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {" "}

                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}

                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
                // si tengo una funcion a la que le pasare el documento tiene que ir en arrow funciont sino solo paso el nombre de la funcion
                >
                    Editar
                </button>

                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                
                onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
  )
}

export default Paciente
