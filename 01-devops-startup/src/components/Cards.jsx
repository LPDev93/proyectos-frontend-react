import React from "react";
import Single from "../img/assets/single.png";
import Double from "../img/assets/double.png";
import Triple from "../img/assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">PROYECTO 01</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 Proyecto</p>
            <p className="py-2 border-b mx-8">1 Repositorio</p>
            <p className="py-2 border-b mx-8">1 semana</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Comienza ahora
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">PROYECTO 02</h2>
          <p className="text-center text-4xl font-bold">$449</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 Proyecto</p>
            <p className="py-2 border-b mx-8">5 Repositorios</p>
            <p className="py-2 border-b mx-8">2 semanas</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Comienza ahora
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 h-auto mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">PROYECTO 03</h2>
          <p className="text-center text-4xl font-bold">$949</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 Proyecto</p>
            <p className="py-2 border-b mx-8">5 Repositorios</p>
            <p className="py-2 border-b mx-8">4 semanas</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Comienza ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
