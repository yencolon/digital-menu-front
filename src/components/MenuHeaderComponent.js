import React from 'react';
import { NavLink } from 'react-router-dom';

import 'assets/styles/menu-header.css';

function MenuHeader({ title, containerStyle, titleStyle, image, navItemStyle, navItemActiveStyle}) {
    return (
        <nav className="flex items-center justify-center md:justify-between flex-wrap sticky w-full px-10" style={containerStyle}>
            {image ? <img src={image} alt={title} className='h-150 w-150 p-2' height={100} width={100} /> : <a href='/' className='text-3xl font-bold' style={titleStyle}>{title}</a>}
            <div className="hidden lg:block lg:justify-end">
                <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Menu</NavLink>
                <NavLink to="/payments" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Métodos de Pago</NavLink>
                <NavLink to="/delivery" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Delivery</NavLink>
                <NavLink to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Contactos</NavLink>
            </div>
        </nav>
    )
};

export default MenuHeader;


