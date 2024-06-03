import React from 'react'
import poster from '../../assets/poster.jpg'
export const MovieCard = () => {
    return (
        <div className='lg:w-52 w-40   lg:h-[100%]  '>
            <div className='relative'>
                <img className=' lg:w-52 w-40 lg:h-72 h-56 bg-slate-600 p-1  rounded shadow-md  ' src={poster} />
                <div className="opacity-0 hover:opacity-100  duration-300 absolute inset-0 flex justify-center items-center bg-slate-400 text-4xl text-white font-semibold ">Dwayne</div>

            </div>

            <h1>The Great Train Robbery</h1>
            <p className='text-slate-500 pl-1'>1913</p>
        </div>
    )
}

