import React from "react";

import logo_sonda from "./../../assets/logo_sonda.png";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router";
const LoginPage = () => {
    const navigate = useNavigate();
    const OnLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'
        navigate(lastPath, {
            replace: true
        });
    }
    return (
        <div className="grid place-items-center h-screen">
            <div className="w-3/4 h-96 flex rounded-2xl border-2 border-blue-700 shadow-2xl ">
                <div className=" w-7/12">
                    <p className="text-center mt-16 text-3xl text-gray-60 font-semibold">
                        Login
                    </p>
                    <LoginForm OnLogin={OnLogin} />
                </div>
                <div className="bg-white w-5/12 rounded-r-2xl flex items-center align-middle">
                    <img
                        className="py-2 pl-6"
                        src={logo_sonda}
                        alt="Logo"
                        height="30"
                        width="75%"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
