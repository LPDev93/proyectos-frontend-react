import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">DevOPS.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare
              className="cursor-pointer hover:scale-150 duration-200"
              size={30}
            />
            <FaInstagram
              className="cursor-pointer hover:scale-150 duration-200"
              size={30}
            />
            <FaTwitterSquare
              className="cursor-pointer hover:scale-150 duration-200"
              size={30}
            />
            <FaGithubSquare
              className="cursor-pointer hover:scale-150 duration-200"
              size={30}
            />
            <FaDribbbleSquare
              className="cursor-pointer hover:scale-150 duration-200"
              size={30}
            />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Servicios</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Analítica
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Marketing
              </li>
              <li className="py-2 text-sm cursor-pointer">E-Commerce</li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Reportes
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Soporte</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Planes
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Políticas
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Guías
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                API status
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Compañia</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Nosotros
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Blog
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Bolsa de trabajo
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Cursos
              </li>
              <li className="py-2 text-sm cursor-pointer hover:underline">
                Proyectos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center mx-auto my-2 text-l font-semibold">
        Desarrolador por <span className="text-[#00DF9A]">Luigui P.</span> Todos
        los derechos reservados 2023.
      </p>
    </>
  );
};

export default Footer;
