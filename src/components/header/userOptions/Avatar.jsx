import React from 'react'
import { FaUser } from "react-icons/fa";

export const Avatar = () => {
  return (
    <div className='  '>
      
      <button className='h-10 w-10 hover:bg-slate-200   bg-slate-100   rounded-full flex items-center justify-center '>
        <FaUser />
      </button>
    </div>
  )
}
