import React, { useContext } from "react";
import LogOut from "./userOptions/LogOut";
import { Avatar } from "./userOptions/Avatar";
import Movie_Stack from "./../../assets/Movie_Stack.png";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/context/AuthContext";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  // const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate();
  const onLogOut = () => {
    if (confirm("Seguro que quieres Cerrar Sesion?")) {
      alert("Se ha cerrado sesion!");
      navigate("/login", { replace: true });
    }
  };
  return (
    <div className="bg-slate-50 pr-16 w-full flex flex-wrap h-14 text-blue-700 justify-between">
      <img
        className="pl-6 h-full py-1" // Añade la clase h-full para que la imagen tome la altura completa del contenedor
        src={Movie_Stack}
        alt="Logo"
        width={215}
        style={{ maxWidth: "100%" }} // Añade un estilo para que el ancho máximo sea el 100% del contenedor
      />

      <SearchBar />
      <div className="flex flex-wrap items-center justify-center space-x-4 mr-4">
        <Avatar />
        <LogOut onLogOut={onLogOut} />
      </div>
    </div>
  );
};
