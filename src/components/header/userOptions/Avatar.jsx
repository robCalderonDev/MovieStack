import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

export const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="  ">
      <button
        onClick={toggleDropdown}
        className="h-10 w-10 hover:bg-slate-200   bg-slate-100   rounded-full flex items-center justify-center "
      >
        <FaUser />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-opacity-5 mr-20">
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                onClick={closeDropdown}
              >
                <AiOutlineSetting className="mt-0.5 mr-1" />
                Configuracion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                onClick={closeDropdown}
              >
                <BiCameraMovie className="mt-0.5 mr-1" />
                Mis peliculas
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
