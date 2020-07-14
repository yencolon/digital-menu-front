import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

function MenuFooter() {
    return (
        <div>
            <Hero size="fullheight">
                <Hero.Head renderAs="header" />
                <Hero.Body />
                <Hero.Footer>
                    <Footer>
                        <Container>
                            <Content>
                            </Content>
                        </Container>
                    </Footer>
                </Hero.Footer>
            </Hero>
        </div>
    )
};

export default MenuFooter;