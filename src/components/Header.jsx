function Header(/*{toma1Valor}*/) {//para cceder a los props le pongo props en los parametros
    
  // const variableHeader = true;
  // toma1Valor(variableHeader);//aqui le mando el valor al padre creando una funcion
    
      return (
        
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Segumiento Pacientes{" "}<span className="text-indigo-600">Veterianaria</span></h1>
       
      )
}


export default Header;