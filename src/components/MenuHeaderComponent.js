import React from 'react';

import 'assets/styles/menu-header.css';

function MenuHeader({ containerStyle, titleStyle }) {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 fixed w-full" style={containerStyle}>
            <div className="flex-grow lg:items-center lg:flex">
                <h1 className='text-center text-2xl font-bold' style={titleStyle}>NOMBRE.</h1>
            </div>
            <div className="hidden lg:block lg:justify-end">
                <a href="/menu" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Menu</a>
                <a href="/payments" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Métodos de Pago</a>
                <a href="/delivery" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Delivery</a>
                <a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Contactos</a>
            </div>
        </nav>
    )
};

export default MenuHeader;


