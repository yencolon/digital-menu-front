import React from 'react';

export const Hero = () => {
  return (
    <div className="pt-24 py-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="flex flex-row items-center justify-center">
        <div className="px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Soluciones Digitales
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Digitalizacion de Menu, metricas, acceso las 24h.
          </h3>
          <button className="bg-yellow-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Contactanos
          </button>
        </div>
        <div className='flex flex-row'>
          <img
            className="h-96 rounded"
            src={process.env.PUBLIC_URL + '/qr.jpg'}
            alt="qr"
          />
        </div>
      </div>
    </div>
  );
};
