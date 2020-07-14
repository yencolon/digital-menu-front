import React, { Fragment } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Tabs from 'react-bulma-components/lib/components/tabs';

import '../../styles/radio-button.css';

function MenuButtons({ buttons, style = 'none' }) {
    return (
        <Fragment>
            <Section>
                <Container>
                    <Columns centered={true}>
                        <Button.Group>
                            {
                                buttons.map(button => {
                                    return <Button key={button.title}>{button.title}</Button>
                                })
                            }
                        </Button.Group>
                    </Columns>

                    <Columns centered={true}>
                        <Tabs
                            fullwidth={true}
                            align='centered'
                        >
                            {
                                buttons.map(button => {
                                    return (
                                    <Tabs.Tab active={button.active} key={button.title}>
                                        {button.title}
                                    </Tabs.Tab>)
                                })
                            }
                        </Tabs>
                    </Columns>

                </Container>
            </Section>
        </Fragment>
    );
}

export default MenuButtons;