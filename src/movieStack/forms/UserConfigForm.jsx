import React from 'react'


const UserConfigForm = ({saveChanges}) => {
  return (
    <div className='w-2/5 mt-10 '>

        <h1>Cambiar Nombre</h1>  
        <input className="w-full h-8 mt-1 placeholder:text-xs pl-2 bg-slate-100 outline-none focus:border-blue-700  focus:outline-none focus:border-2  " type="text" placeholder="Nuevo Nombre"/>

        <h1 className='mt-4'>Cambiar contrasena</h1>
        <input className="w-full h-8 mt-1 placeholder:text-xs pl-2 bg-slate-100 outline-none focus:border-blue-700  focus:outline-none focus:border-2  " type="password" placeholder="Nueva Contrasena"/>

        <input className="w-full h-8 mt-2 placeholder:text-xs pl-2 bg-slate-100 outline-none focus:border-blue-700  focus:outline-none focus:border-2  " type="password" placeholder="Confirmar Contrasena"/>

        <h1 className='mt-4'>Cambiar correo</h1>        
        <input className="w-full h-8 mt-1 placeholder:text-xs pl-2 bg-slate-100 outline-none focus:border-blue-700  focus:outline-none focus:border-2  " type="password" placeholder="Cambiar correo"/>

      <button className="w-[15%] mt-10 h-11 rounded  bg-blue-700 text-white hover:bg-blue-600" onClick={saveChanges}>Guardar</button>
        
        
    </div>
  )
}



export default UserConfigForm