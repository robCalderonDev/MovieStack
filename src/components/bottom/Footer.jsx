import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import logo_sonda from "./../../assets/logo_sonda.png";

const Footer = () => {
  return (
    <div className="bg-slate-100 h-[100%] sticky top-[100vh]">
      <div className="flex justify-center gap-5">
        <div className=" w-10/12 border-b-2  border-gray-400"></div>
        <FaFacebookSquare size="45" className="pt-4" />
        <IoLogoInstagram size="45" className="pt-4" />
        <BsTwitterX size="45" className="pt-4" />
        <div className=" w-10/12 border-b-2  border-gray-400"></div>
      </div>
      <div className="flex justify-center pt-4">
        <img src={logo_sonda} className="" height="30" width="120" />
      </div>
      <p className="text-center text-xs my-2  text-slate-400">
        Copyright @2024 MovieStack
      </p>
    </div>
  );
};

export default Footer;
