import React from 'react';

import { HomeOutlined, DollarOutlined, CarOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function MenuNavigation({ containerStyle, itemStyle, hasDelivery = true }) {
    return (
        <nav className="bottom-0 fixed w-full lg:hidden flex items-center justify-around flex-wrap p-1 text-white" style={containerStyle}>
            {/* className='navigation-container' className='navigation-item'*/}
            <div className='flex flex-col text-sm'>
                <HomeOutlined style={{ fontSize: '20px' }} />
                <Link to="/">Menú</Link>
            </div>
            <div className='flex flex-col text-sm'>
                <DollarOutlined style={{ fontSize: '20px' }} />
                <a href="/payments" >Pagos</a>
            </div>
            {hasDelivery ? 
                <div className='flex flex-col text-sm'>
                    <CarOutlined style={{ fontSize: '20px' }} />
                    <Link to="/delivery">Delivery</Link>
                </div> : null
            }
            <div className='flex flex-col text-sm'>
                <PhoneOutlined style={{ fontSize: '20px' }} />
                <Link to="/contact">Contacto</Link>
            </div>
        </nav>
    )
}

export default MenuNavigation;