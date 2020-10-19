import React, { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import 'assets/styles/menu-header.css';
import { Pin, InstagramIcon } from './SvgComponents';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';

function MenuHeader () {
    const theme = useThemeState();
    const info = useCurrentRestaurantState();
    const { url } = useRouteMatch();

    useEffect(() => {
        if (!theme.booleans.stickNavBar) return;
        const header = document.getElementById('nav');
        const scrollCallBack = window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, [theme.booleans.stickNavBar]);

    /**
     * containerStyle={theme.navTop.navBarContainerStyle} titleStyle={theme.navTop.navTitleStyle} hasDelivery={theme.booleans.hasDelivery} image={theme.assets.logo} title={theme.API_URLname}
     */

    return (
        <nav id='nav' className="flex items-center justify-start lg:justify-between flex-wrap w-full md:px-5 z-50 abolute" style={theme.navTop.navBarContainerStyle}>
            { theme.assets.logo ? <img src={theme.assets.logo} alt={info.name} className={`${!theme.booleans.showNavTopIcons ? 'justify:left ml-6 w-4/5 md:w-64 py-2' : 'h-150 w-150 py-2 ml-2'}`} height={120} width={120} /> : <a href='/' className='text-3xl font-bold' style={theme.navTop.navTitleStyle}>{info.name}</a>}
            <div className="hidden lg:block lg:justify-end" >
                <NavLink to={`${url}/`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={{}}>Menú</NavLink>
                <NavLink to={`${url}/payments`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={{}}>Métodos de Pago</NavLink>
                {
                    theme.booleans.hasDelivery
                        ? <NavLink to={`${url}/delivery`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={{}}>Delivery</NavLink>
                        : null
                }
                <NavLink to={`${url}/contact`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-5 font-normal" activeStyle={{}}>Contactos</NavLink>
            </div>

            {
                theme.booleans.showNavTopIcons
                    ? <div className='lg:hidden flex justify-end flex-grow' >
                        <a href='https://goo.gl/maps/u57TnknURpbaNg7y8' target="_blank" rel="noopener noreferrer" className='mr-8'>
                            <Pin fill='white' width={28} />
                        </a>
                        <a href='https://www.instagram.com/haptico.menu' target="_blank" rel="noopener noreferrer" className='mr-8'>
                            <InstagramIcon fill='white' width={26} />
                        </a>
                    </div> : null
            }
        </nav>
    );
};

// MenuHeader.propTypes = {
//     title: PropTypes.string.isRequired,
//     containerStyle: PropTypes.object,
//     titleStyle: PropTypes.object,
//     image: PropTypes.string,
//     navItemStyle: PropTypes.object,
//     {}: PropTypes.object
// };

export default MenuHeader;
