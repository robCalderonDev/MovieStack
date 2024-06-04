import React, { useContext } from "react";
import LogOut from "./userOptions/LogOut";
import { Avatar } from "./userOptions/Avatar";
import logo_sonda from "./../../assets/logo_sonda.png";
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
    <div className="bg-slate-50 pr-16 w-full flex flex-wrap h-14  text-blue-700 justify-between">
      <img
        className="py-2 pl-6"
        src={logo_sonda}
        alt="Logo"
        height="30"
        width="140"
      />
      <SearchBar />
      <div className="flex flex-wrap items-center justify-center space-x-4 mr-4">
        <Avatar />
        <LogOut onLogOut={onLogOut} />
      </div>
    </div>
  );
};
