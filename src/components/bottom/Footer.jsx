import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import Movie_Stack from "./../../assets/Movie_Stack.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 h-[100%] sticky top-[100vh]">
      <div className="flex justify-center gap-5">
        <div className=" w-10/12 border-b-2  border-gray-400"></div>
        <FaFacebookSquare
          size="45"
          className="pt-4 hover:fill-slate-700 hover:-translate-y-1 duration-300"
        />
        <IoLogoInstagram
          size="45"
          className="pt-4 hover:fill-slate-700 hover:-translate-y-1 duration-300"
        />
        <BsTwitterX
          size="45"
          className="pt-4 hover:fill-slate-700 hover:-translate-y-1 duration-300"
        />
        <div className=" w-10/12 border-b-2  border-gray-400 "></div>
      </div>
      <div className="flex justify-center pt-4">
        <button onClick={() => navigate("/")}>
          <img src={Movie_Stack} className="" height="30" width="140" />
        </button>
      </div>
      <p className="text-center text-xs my-2  text-slate-400">
        Copyright @2024 MovieStack
      </p>
    </div>
  );
};

export default Footer;
