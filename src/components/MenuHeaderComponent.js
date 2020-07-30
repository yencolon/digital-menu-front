import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Heading from 'react-bulma-components/lib/components/heading/heading';

import 'styles/menu-header.css';

function MenuHeader() {
    return (
        <div>
            <Navbar color='primary' fixed='top'>
                <Navbar.Brand>
                    <Navbar.Item>
                        <Heading className='menu-header-title'>NOMBRE.</Heading>
                    </Navbar.Item>
                    {/* <Navbar.Burger onClick={() => setisActive(!isActive)} /> */}
                </Navbar.Brand>
                {/* <Navbar.Menu className='is-hidden-desktop'> */}
                <Navbar.Container position="end" className='is-hidden-touch'>
                    <Navbar.Item href="/menu">
                        <Heading size={5} className='menu-header-title'>Menú</Heading>
                    </Navbar.Item>
                    <Navbar.Item href="/payments">
                        <Heading size={5} className='menu-header-title'>Métodos de Pago</Heading>
                    </Navbar.Item>
                    <Navbar.Item href="/delivery">
                        <Heading size={5} className='menu-header-title'>Delivery</Heading>
                    </Navbar.Item>
                    <Navbar.Item href="/contact">
                        <Heading size={5} className='menu-header-title'>Contacto</Heading>
                    </Navbar.Item>
                </Navbar.Container>
                {/* </Navbar.Menu> */}
            </Navbar>
        </div>
    )
};

export default MenuHeader;


