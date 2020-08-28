import React from 'react';

import { HomeOutlined, DollarOutlined, CarOutlined, PhoneOutlined } from '@ant-design/icons';
import { NavLink, useRouteMatch } from 'react-router-dom';

function MenuNavigation({ match, containerStyle, itemStyle, hasDelivery = true }) {
    let { url } = useRouteMatch();
    return (
        <nav className="bottom-0 fixed w-full lg:hidden flex items-center justify-around flex-wrap p-1 text-white" style={containerStyle}>
            {/* className='navigation-container' className='navigation-item'*/}
            <div className='flex flex-col text-sm'>
                <HomeOutlined style={{ fontSize: '20px' }} />
                <NavLink to={`${url}`}>Menú</NavLink>
            </div>
            <div className='flex flex-col text-sm'>
                <DollarOutlined style={{ fontSize: '20px' }} />
                <NavLink to={`${url}/payments`} >Pagos</NavLink>
            </div>
            {hasDelivery ? 
                <div className='flex flex-col text-sm'>
                    <CarOutlined style={{ fontSize: '20px' }} />
                    <NavLink to={`${url}/delivery`} >Delivery</NavLink>
                </div> : null
            }
            <div className='flex flex-col text-sm'>
                <PhoneOutlined style={{ fontSize: '20px' }} />
                <NavLink to={`${url}/contact`} >Contacto</NavLink>
            </div>
        </nav>
    )
}

export default MenuNavigation;