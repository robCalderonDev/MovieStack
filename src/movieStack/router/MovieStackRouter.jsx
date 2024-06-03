import React from 'react'
import { Navbar } from '../../components/header/Navbar'
import { Navigate, Route, Routes } from 'react-router'
import { HomePage } from '../Pages/HomePage'
import Footer from '../../components/bottom/Footer'

export const MovieStackRouter = () => {
    return (
        <>
            <Navbar />

            <div >
                <Routes>
                    <Route path='home' element={<HomePage />} />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}
