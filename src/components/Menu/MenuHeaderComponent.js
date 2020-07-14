import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

function MenuHeader() {
    return (
        <div>
            <Navbar color='primary'>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
            </Navbar>
        </div>
    )
};

export default MenuHeader;