import React from "react";
import { MovieCard } from "../Components/MovieCard";

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-16 lg:mx-0 mx-5">
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
