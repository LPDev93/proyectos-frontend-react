import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00DF9A]">DevOPS.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:bg-gray-900 cursor-pointer">Inicio</li>
        <li className="p-4 hover:bg-gray-900 cursor-pointer">Compañia</li>
        <li className="p-4 hover:bg-gray-900 cursor-pointer">Recursos</li>
        <li className="p-4 hover:bg-gray-900 cursor-pointer">Nosotros</li>
        <li className="p-4 hover:bg-gray-900 cursor-pointer">Contacto</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00DF9A] p-4">DevOPS.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 hover:bg-gray-900 cursor-pointer border-b border-grey-600">
            Inicio
          </li>
          <li className="p-4 hover:bg-gray-900 cursor-pointer border-b border-grey-600">
            Compañia
          </li>
          <li className="p-4 hover:bg-gray-900 cursor-pointer border-b border-grey-600">
            Recursos
          </li>
          <li className="p-4 hover:bg-gray-900 cursor-pointer border-b border-grey-600">
            Nosotros
          </li>
          <li className="p-4 hover:bg-gray-900 cursor-pointer">Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
