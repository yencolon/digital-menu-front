import React, { Fragment } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Tabs from 'react-bulma-components/lib/components/tabs';

function MenuButtons({ buttons, style = 'none' , selected, onButtonClicked}) {
    return (
        <Fragment>
            <Section>
                <Container>
                    <Columns centered={true}>
                        <Button.Group>
                            {
                                buttons.map(button => {
                                    return <Button outlined={button.id !== selected} isSelected={button.id === selected} color='primary' key={button.id} onClick={() => onButtonClicked(button.id)}>{button.name}</Button>
                                })
                            }
                        </Button.Group>
                    </Columns>

                    <Columns centered={true}>
                        <Tabs fullwidth={true} align='centered'>
                            {
                                buttons.map(button => {
                                    return (
                                    <Tabs.Tab active={button.id === selected} key={button.id} onClick={() => onButtonClicked(button.id)}>
                                        {button.name}
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