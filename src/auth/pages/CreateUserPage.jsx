import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Movie_Stack from "./../../assets/Movie_Stack.png";
import CreateUserForm from "../components/forms/CreateUserForm";
import api from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../context/AuthProvider";
import { AuthContext } from "../context/AuthContext";
const CreateUserPage = () => {

  const { user, login, logout,setUser } = useContext(AuthContext);

  const REGISTER_URL = "/user";
  const navigate = useNavigate();
  const OnGoHome = () => {
    const lastPath = localStorage.getItem("lastPath") || "/home";
    navigate(lastPath, {
      replace: true,
    });
  };
  const handleCreate = async (values, setLoading) => {
    const { name, email, password } = values;
  
    try {
      const payload = { name, email, password };
  
      const response = await api.post(
        REGISTER_URL,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
  
      const data = response.data;
  
      if (data.message === 'User Created Sucessfully') {
        const user = data.publicUser;
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        toast.success('¡Usuario creado con éxito!');
        OnGoHome();
        console.log(user)
      } 
      if (data.error === 'Email already in use') {
        toast.error('Email ya en uso');
      }
      if (data.error === 'User already exists') {
        toast.error('Usuario ya existe');
      }
  
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Error inesperado del servidor.";
      toast.error(errorMessage);
      console.error('Error al crear usuario:', err);
    } finally {
      setLoading(false);
    }
  };
  

  



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-2/5  w-4/5 h-fit     rounded-2xl border-2 border-blue-700 shadow-2xl">
        <div className="w-full ">
          <p className="text-center mt-5 text-2xl text-gray-600 font-semibold">
            Crear cuenta
          </p>
          
          <ToastContainer />
        </div>
        {/* <div className="bg-white sm:visible sm:w-[80%] lg:ml-0 ml-10 lg:visible invisible w-full md:w-5/12 rounded-r-2xl flex items-center rounded-full justify-center md:justify-start">
          <img
            className="py-2 pl-6"
            src={Movie_Stack}
            alt="Logo"
            height="30"
            width="50%"
          />
        </div> */}
        <CreateUserForm handleCreate={handleCreate}/>
      </div>
    </div>
  );
};

export default CreateUserPage;
