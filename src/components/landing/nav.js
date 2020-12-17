import React from 'react';

export const Nav = () => {
  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-black bg-balck">
      <div
        className={`w-full  flex flex-wrap items-center justify-between mt-0 py-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600`}
      >
        <div className="flex items-center">
          <a
            className={`no-underline hover:no-underline font-bold text-2xl lg:text-4xl pl-4 text-white`}
            href="#"
          >
            {/* Icon from: http://www.potlabicons.com/ */}
            Haptico
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="flex-grow flex-end lg:flex lg:items-center lg:w-auto hidden mt-2 mr-4 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Use Cases
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline rounded-full bg-yellow-500 text-white font-bold mt-4 lg:mt-0 py-2 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
