import React from 'react';

import 'assets/styles/menu-header.css';

function MenuHeader({ title, containerStyle, titleStyle, image }) {
    return (
        <nav className="flex items-center justify-center lg:justify-around flex-wrap sticky w-full" style={containerStyle}>
            <div className="flex-grow border-black lg:items-center py-2">
                {/* */}
                {image ? <img src={image} alt={title} height={80} width={80} /> : <h1 className='text-left text-2xl font-bold ml-10' style={titleStyle}>{title}</h1>}
            </div>
            <div className="hidden lg:block lg:justify-end">
                <a href="/menu" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold">Menu</a>
                <a href="/payments" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold">Métodos de Pago</a>
                <a href="/delivery" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold">Delivery</a>
                <a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold">Contactos</a>
            </div>
        </nav>
    )
};

export default MenuHeader;


