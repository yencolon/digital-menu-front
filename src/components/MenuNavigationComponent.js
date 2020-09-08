import React from 'react';

import { HomeOutlined, DollarOutlined, CarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { NavLink, useRouteMatch } from 'react-router-dom';


function MenuNavigation({ match, containerStyle, itemStyle, hasDelivery = true }) {
    let { url } = useRouteMatch();
    return (
        <nav className="bottom-0 fixed w-full lg:hidden flex items-center justify-around flex-wrap p-1 text-white" style={containerStyle}>
            {/* className='navigation-container' className='navigation-item'*/}
            <NavLink to={`${url}`} className='flex flex-col text-sm w-3/12 text-center font-bold'>
                <HomeOutlined style={{ fontSize: '20px' }} />
                Menú
            </NavLink>

            <NavLink to={`${url}/payments`} className='flex flex-col text-sm w-3/12 text-center font-bold'>
                <DollarOutlined style={{ fontSize: '20px' }} />
                Pagos
            </NavLink>

            {
                hasDelivery ?
                <NavLink to={`${url}/delivery`} className='flex flex-col text-sm w-3/12 text-center font-bold'>
                    <CarOutlined style={{ fontSize: '20px' }} />
                    {/* <Icon component={MotoBike} style={{ fontSize: '20px' }}/> */}
                    Delivery
                </NavLink> : null
            }

            <NavLink to={`${url}/contact`} className='flex flex-col text-sm w-3/12 text-center font-bold'>
                <ClockCircleOutlined style={{ fontSize: '20px' }} />
                Horarios
            </NavLink>
        </nav>
    )
}

export default MenuNavigation;