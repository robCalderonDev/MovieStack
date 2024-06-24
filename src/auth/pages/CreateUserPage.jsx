import React from "react";
import { useNavigate } from "react-router";
import Movie_Stack from "./../../assets/Movie_Stack.png";
import CreateUserForm from "../components/forms/CreateUserForm";
import Test from "../components/forms/Test";

const CreateUserPage = () => {
  const navigate = useNavigate();
  const OnGoHome = () => {
    const lastPath = localStorage.getItem("lastPath") || "/home";
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-2/5  w-4/5 h-fit     rounded-2xl border-2 border-blue-700 shadow-2xl">
        <div className="w-full ">
          <p className="text-center mt-5 text-2xl text-gray-600 font-semibold">
            Crear cuenta
          </p>
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
        <CreateUserForm OnGoHome={OnGoHome} />
      </div>
    </div>
  );
};

export default CreateUserPage;
