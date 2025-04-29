import React, { useContext, useEffect } from "react";
import { MovieCard } from "../Components/MovieCard";
import { AuthContext } from "../../auth/context/AuthContext";
import { ToastContainer } from "react-toastify";

export const HomePage = () => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user, "user desde el home");
  useEffect(() => {
    
   console.log(user)
   
  }, [])
  
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-16 lg:mx-0 mx-5">
        {user && `Bienvenido ${user.name}`}
        Las mejores peliculas hd de calidad
      </h1>
      <p className="text-center mt-8 mb-5  text-xs lg:mx-0 mx-10">
        Bienvenido al sitio moviestack donde podras revisar todos las peliculas
        y series en la mejor calidad
      </p>
      <hr />
      <div className="flex flex-wrap gap-10   justify-center mt-5 mb-10">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
     
    </div>
  );
};
