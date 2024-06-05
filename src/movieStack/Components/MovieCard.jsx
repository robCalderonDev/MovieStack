import React from "react";
import poster from "../../assets/poster.jpg";
import { Link } from "react-router-dom";
export const MovieCard = () => {
  return (
    <div className="lg:w-52 w-40   lg:h-[100%]  ">
      <div className="relative  hover:brightness-95 ">
        <img
          className=" lg:w-52 w-40 lg:h-72 h-56  bg-slate-600 p-1  duration-300   rounded shadow-md  "
          src={poster}
        />
        <div className="opacity-0 hover:opacity-100 hover:brightness-100 transition ease-out delay-100 absolute inset-0  flex justify-center items-center   ">
          <Link>
            <button className="bg-blue-700 w-28 h-10 hover:bg-blue-600 rounded text-white">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      <h1>The Great Train Robbery</h1>
      <p className="text-slate-500 pl-1">1913</p>
    </div>
  );
};
