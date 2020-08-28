import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import 'assets/styles/menu-header.css';

function MenuHeader({ title, containerStyle, titleStyle, image, navItemStyle, navItemActiveStyle}) {
    let { url } = useRouteMatch();
 
    return (
        <nav className="flex items-center justify-center md:justify-between flex-wrap sticky w-full px-10" style={containerStyle}>
            {image ? <img src={process.env.PUBLIC_URL + '/images/' + image} alt={title} className='h-150 w-150 p-2' height={120} width={120} /> : <a href='/' className='text-3xl font-bold' style={titleStyle}>{title}</a>}
            <div className="hidden lg:block lg:justify-end">
                <NavLink to={`${url}/`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Menu</NavLink>
                <NavLink to={`${url}/payments}`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Métodos de Pago</NavLink>
                <NavLink to={`${url}/delivery`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Delivery</NavLink>
                <NavLink to={`${url}/contact`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Contactos</NavLink>
            </div>
        </nav>
    )
};

export default MenuHeader;


