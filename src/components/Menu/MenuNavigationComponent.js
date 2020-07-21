import React from 'react';

import { HomeOutlined, DollarOutlined, ShoppingCartOutlined, ContactsOutlined } from '@ant-design/icons';
import Navbar from 'react-bulma-components/lib/components/navbar';

import 'styles/menu-navigation.css';

function MenuNavigation() {
    return (
        <div className='is-hidden-desktop'>
            <Navbar color='primary' fixed='bottom'>
                <Navbar.Container className='navigation-container'>
                    <Navbar.Item href="#" className='navigation-item '>
                        <HomeOutlined style={{ fontSize: '20px' }} />
                        Menú
                    </Navbar.Item>
                    <Navbar.Item href="#" className='navigation-item'>
                        <DollarOutlined style={{ fontSize: '20px'}} />
                        Métodos
                    </Navbar.Item>
                    <Navbar.Item href="#" className='navigation-item'>
                        <ShoppingCartOutlined style={{ fontSize: '20px'}}/> 
                        Delivery
                    </Navbar.Item>
                    <Navbar.Item href="#" className='navigation-item'>
                        <ContactsOutlined style={{ fontSize: '20px' }}/>
                        Contacto
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar>
        </div>
    )
}

export default MenuNavigation;