import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9A] font-bold p-2">SOMOS UN EQUIPO</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Con experiencia.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Creando sistemas
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold text-[#00DF9A] md:pl-4 pl-2"
            strings={["modernos.", "escalables.", "creativos."]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Software que innova tu Mundo
        </p>
        <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Comienza ahora
        </button>
      </div>
    </div>
  );
};

export default Hero;
