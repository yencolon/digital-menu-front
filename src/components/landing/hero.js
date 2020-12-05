import React from 'react';

export const Hero = () => {
  return (
    <div className="pt-24 py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Soluciones Digitales
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Digitalizacion de Menu, metricas, acceso las 24h.
        </h3>

        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Contactanos
        </button>
      </div>
    </div>
  );
};
