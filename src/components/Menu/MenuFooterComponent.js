import React, { Fragment } from 'react';

import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading/heading';
import { Footer } from 'react-bulma-components';
function MenuFooter() {
    return (
        <Fragment>
            <Hero color='primary' className='is-hidden-mobile'>
                <Hero.Head renderAs="header" />
                <Hero.Body>
                    <Container>
                        <Heading>NOMBRE/LOGO.</Heading>
                    </Container>
                </Hero.Body>
                <Hero.Footer color='primary'>
                    <Footer color='primary'>
                        <Container color='primary'>
                            <Content color='primary'>
                                Y  E N     C O L O N
                            </Content>
                        </Container>
                    </Footer>
                </Hero.Footer>
            </Hero>
        </Fragment>
    )
};

export default MenuFooter;