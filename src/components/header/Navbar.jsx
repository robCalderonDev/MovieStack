import React from 'react'
import LogOut from './userOptions/LogOut'
import { Avatar } from './userOptions/Avatar'
import logo_sonda from'./../../assets/logo_sonda.png'
export const Navbar = () => {
  return (
    <div className='bg-slate-50  w-full flex flex-wrap h-14  text-blue-700 justify-between'>
      
      
      <img className='py-2 pl-6' src={logo_sonda} alt="Logo" height="30" width="140" />
    
      <div className='flex flex-wrap items-center justify-center space-x-4 mr-4'> 
        <Avatar/>
        <LogOut/>
      
      </div>
      
      </div>
  )
}
