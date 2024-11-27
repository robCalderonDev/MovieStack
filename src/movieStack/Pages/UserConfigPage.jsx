import React from "react";
import UserConfigForm from "../forms/UserConfigForm";
import { useNavigate } from "react-router";

const UserConfigPage = () => {
  const navigate = useNavigate();

  const saveChanges = () => {
    alert("Cambios guardados"); 
    navigate("/");
    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="w-full flex justify-center ">
      <div className="w-2/3  p-2">
        <h1 className="text-3xl font-bold mt-16 lg:mx-0 mx-5 text-gray-600 text-left">Cuenta | Robert Calderon</h1>
        <hr className="border-1 border-blue-600 my-2" />
        <UserConfigForm saveChanges={saveChanges}/>
      </div>
    </div>
  );
};

export default UserConfigPage;
