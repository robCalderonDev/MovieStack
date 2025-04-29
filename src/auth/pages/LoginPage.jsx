import React, { useContext } from "react";

import Movie_Stack from "./../../assets/Movie_Stack.png";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router";
import api from "../../auth/api/axios";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
const LoginPage = () => {
  

  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext);  
  
  const OnLogin = (email,password) => {
   if (!email || !password) {
      toast.error('Email y contraseña son obligatorios');
      return;
   }
        api.post('/user/login', { email, password })
              .then((response) => {
                if(response.data.message === 'Login successfully'){
                  toast.success('¡Login exitoso!');
                  const user = response.data.publicUser;
                  localStorage.setItem('user', JSON.stringify(user));
                  setUser(user);
                  localStorage.setItem("token", response.data.token);
                  const lastPath = localStorage.getItem("lastPath") || "/";
                 
                  navigate(lastPath, {
                     replace: true,
                  });
                }
                console.log(response);
                if(response.data.error === 'Invalid password'){
                 return toast.error('Contraseña incorrecta');
                }
                if(response.data.error === 'User not found'){
                  return toast.error('Usuario no encontrado');
                }
                  // const action = { type: types.login, payload: user };
                  // dispatch(action);
                 
             
                 
              })
              .catch((error) => {
                console.log('hola');
                 console.error(error);
              });




  };
  
  const OnCreateAccount = () => {
    navigate("/register");
    const lastPath = localStorage.getItem("lastPath") || "/register";
    navigate(lastPath, {
      replace: true,
    });
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 h-fit    flex flex-wrap rounded-2xl border-2 border-blue-700 shadow-2xl">
        <div className="w-full md:w-7/12">
          <p className="text-center mt-16 text-3xl text-gray-600 font-semibold">
            Login
          </p>
          <LoginForm OnLogin={OnLogin} />
          <button className="w-full lg:my-5 " onClick={OnCreateAccount}>
            <p className="text-xs text-center text-gray-400 pt-1  hover:text-gray-500">
              Registrarse
            </p>
          </button>
        </div>
        <div className="bg-white sm:visible sm:w-[80%] lg:ml-0 ml-10 lg:visible invisible w-full md:w-5/12 rounded-r-2xl flex items-center justify-center md:justify-start">
          <img
            className="py-2 pl-6"
            src={Movie_Stack}
            alt="Logo"
            height="30"
            width="75%"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
