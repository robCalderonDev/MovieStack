import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const LogOut = ({ onLogOut }) => {

    return (

        <>
            <button onClick={onLogOut} className='hover:bg-slate-200 bg-slate-100  h-10 w-10 rounded-full flex items-center justify-center'>

                <IoIosLogOut />

            </button>

        </>
    )
}

export default LogOut