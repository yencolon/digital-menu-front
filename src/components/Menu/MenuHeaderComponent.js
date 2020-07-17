import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Heading from 'react-bulma-components/lib/components/heading/heading';

import 'styles/menu-header.css';

function MenuHeader() {
    const [isActive, setisActive] = React.useState(false);

    return (
        <div>
            <Navbar color='primary' fixed='top' active={isActive}>
                <Navbar.Brand>
                    <Navbar.Item>
                        <Heading className='menu-header-title'>NOMBRE.</Heading>
                    </Navbar.Item>
                    <Navbar.Burger onClick={() => setisActive(!isActive)} />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container position="end">
                         <Navbar.Item href="#">
                            Opcion 1
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            Opcion 1
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </div>
    )
};

export default MenuHeader;


