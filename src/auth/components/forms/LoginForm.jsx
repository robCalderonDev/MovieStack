import React from "react";

const LoginForm = ({ OnLogin }) => {


    return (
        <div className=" mt-4">
            <div className="w-1/2 mx-auto  ">
                <h1 className="text-xs text-slate-500">Correo</h1>

                <input
                    className="w-full h-8 mt-1
            bg-slate-100
              outline-none
               focus:border-blue-700  focus:outline-none focus:border-2  "
                    type="email"
                />

                <h1 className="text-xs mt-5 text-slate-500">Contraseña</h1>
                <input
                    className="w-full h-8 mt-1
            bg-slate-100
              outline-none
               focus:border-blue-700  focus:outline-none focus:border-2  "
                    type="password"
                />
            </div>
            <div className=" mx-auto text-center mt-5">
                <button
                    className="w-[50%] h-11 rounded  bg-blue-700 text-white hover:bg-blue-600"
                    onClick={OnLogin}>
                    Acceder
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
