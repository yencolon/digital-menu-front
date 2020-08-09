import React from 'react';

import 'assets/styles/menu-header.css';

function MenuHeader({ title, containerStyle, titleStyle, image }) {
    return (
        <nav className="flex items-center justify-center md:justify-between px-10 flex-wrap sticky w-full" style={containerStyle}>
            {image ? <img src={image} alt={title} height={80} width={80} /> : <a href='/' className='text-3xl font-bold' style={titleStyle}>{title}</a>}
            <div className="hidden lg:block lg:justify-end">
                <a href="/menu" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">Menu</a>
                <a href="/payments" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">Métodos de Pago</a>
                <a href="/delivery" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">Delivery</a>
                <a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-semibold">Contactos</a>
            </div>
        </nav>
    )
};

export default MenuHeader;


