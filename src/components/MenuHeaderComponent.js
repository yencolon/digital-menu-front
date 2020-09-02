import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import 'assets/styles/menu-header.css';

function MenuHeader({ title, containerStyle, titleStyle, image, navItemStyle, navItemActiveStyle }) {
    let { url } = useRouteMatch();

    return (
        <nav className="flex items-center justify-between md:justify-between flex-wrap sticky w-full px-5 md:px-10" style={containerStyle}>
            {image ? <img src={process.env.PUBLIC_URL + '/images/' + image} alt={title} className='h-150 w-150 p-2' height={120} width={120} /> : <a href='/' className='text-3xl font-bold' style={titleStyle}>{title}</a>}
            <div className="hidden lg:block lg:justify-end">
                <NavLink to={`${url}/`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Menu</NavLink>
                <NavLink to={`${url}/payments`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Métodos de Pago</NavLink>
                <NavLink to={`${url}/delivery`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Delivery</NavLink>
                <NavLink to={`${url}/contact`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-semibold" activeStyle={navItemActiveStyle}>Contactos</NavLink>
            </div>
            <div className='block lg:hidden'>
                <Pin fill='white' width={25}></Pin>
            </div>
        </nav>
    )
};

export default MenuHeader;

const Pin = ({...props }) =>  {
    return (
        <svg viewBox="0 0 69.251 83.244" width={69.251} height={83.244} {...props}>
        <path d="M34.625 0C15.502 0 0 15.502 0 34.625 0 47.99 7.577 59.579 18.666 65.351c2.514 1.567 13.049 8.56 15.465 17.089.317 1.121.682 1.054 1.018-.1 2.468-8.484 12.931-15.428 15.436-16.989 11.089-5.771 18.666-17.36 18.666-30.726C69.25 15.502 53.748 0 34.625 0zm0 47.5c-7.11 0-12.875-5.765-12.875-12.875S27.515 21.75 34.625 21.75 47.5 27.515 47.5 34.625 41.735 47.5 34.625 47.5z" />
      </svg>
    )
}


