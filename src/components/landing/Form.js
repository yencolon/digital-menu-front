import React from 'react';

export const Form = () => {
  return (
    <section className="p-16 bg-blue-500">
      <h2 className="text-3xl font-bold font-mono text-center text-gray-300 mb-8">
        Soluciones Digitales
      </h2>
      <div className="flex flex-row justify-around">
        <div className="w-1/2 mt-6 p-5">
          <h2 className="text-white text-2xl font-mono">
            Llena el formulario
          </h2>
          <p className='text-white text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius magna eu urna sollicitudin, nec pretium orci finibus. Aenean
            sagittis venenatis dictum. Aenean rhoncus diam nec lacus vehicula
            egestas. Aliquam nisl mauris, convallis fermentum efficitur at,
            vehicula quis turpis. Aenean dapibus orci in nulla scelerisque
            pharetra. Quisque congue erat at nibh laoreet feugiat. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
        </div>

        <form className="mt-6 p-5 rounded bg-gray-100">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                for="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Nombre
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Tu nombre"
                autocomplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                for="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Apellido
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Tu apellido"
                autocomplete="family-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            for="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Tu email"
            autocomplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="note"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            
          </label>
          <textarea
            id="note"
            type="text"
            name="note"
            placeholder="Mensaje"
            autocomplete="none"
            cols="30" rows="8"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Registrar
          </button>
        </form>
      </div>
    </section>
  );
};
