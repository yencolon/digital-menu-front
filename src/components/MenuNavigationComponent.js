import React from 'react';

import { HomeOutlined, DollarOutlined, ShoppingCartOutlined, ContactsOutlined } from '@ant-design/icons';

function MenuNavigation({ containerStyle, itemStyle }) {
    return (
        <nav className="bottom-0 fixed w-full lg:hidden flex items-center justify-around flex-wrap p-1 text-white" style={containerStyle}>
            {/* className='navigation-container' className='navigation-item'*/}
            <div className='flex flex-col'>
                <HomeOutlined style={{ fontSize: '20px' }} />
                <a href="/menu">Menú</a>
            </div>
            <div className='flex flex-col'>
                <DollarOutlined style={{ fontSize: '20px' }} />
                <a href="/payments" >Métodos</a>
            </div>
            <div className='flex flex-col'>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                <a href="/delivery">Delivery</a>
            </div>
            <div className='flex flex-col'>
                <ContactsOutlined style={{ fontSize: '20px' }} />
                <a href="/contact">Contacto</a>
            </div>
        </nav>
    )
}

export default MenuNavigation;