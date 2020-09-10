import React, { useEffect, useState } from 'react';
import { NavLink, useRouteMatch, Link } from 'react-router-dom';

import 'assets/styles/menu-header.css';
import { Pin, InstagramIcon } from './SvgComponents';

function MenuHeader({ title, containerStyle, titleStyle, image, navItemStyle, navItemActiveStyle }) {
    let { url } = useRouteMatch();

    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        const header = document.getElementById("nav");
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset < scrollPosition) {
                header.classList.add("sticky");
            } else {
                header.classList.remove('sticky')
            }
            setSrollPosition(window.pageYOffset)
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    });

    return (
        <nav id='nav' className="flex items-center justify-between flex-wrap  w-full pl-8 md:px-10 z-50" style={containerStyle}>
            {image ? <img src={image} alt={title} className='h-150 w-150 py-2 ml-2' height={120} width={120}  /> : <a href='/' className='text-3xl font-bold' style={titleStyle}>{title}</a>}
            <div className="hidden lg:block lg:justify-end" >
                <NavLink to={`${url}/`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={navItemActiveStyle}>Menú</NavLink>
                <NavLink to={`${url}/payments`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={navItemActiveStyle}>Métodos de Pago</NavLink>
                <NavLink to={`${url}/delivery`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={navItemActiveStyle}>Delivery</NavLink>
                <NavLink to={`${url}/contact`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={navItemActiveStyle}>Contactos</NavLink>
            </div>
            <div className='lg:hidden flex justify-end flex-grow' > 
                <a href='https://goo.gl/maps/u57TnknURpbaNg7y8' target="_blank" rel="noopener noreferrer" className='mr-8'>
                    <Pin fill='white' width={28} />
                </a>
                <a href='https://www.instagram.com/haptico.menu' target="_blank" rel="noopener noreferrer" className='mr-8'>
                    <InstagramIcon fill='white' width={26} />
                </a>
            </div>
        </nav>
    )
};

export default MenuHeader;
