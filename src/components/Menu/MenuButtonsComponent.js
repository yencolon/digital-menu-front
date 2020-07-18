import React, { Fragment } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Tabs from 'react-bulma-components/lib/components/tabs';


function CardRender({ buttons, selected, onButtonClicked }) {
    return (
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
    );
}

function TextRender({ buttons, onButtonClicked, selected }) {
    return (
        <Columns centered={true}>
            <Button.Group position='centered'>
                {
                    buttons.map(button => {
                        return <Button outlined={button.id !== selected} isSelected={button.id === selected} color='primary' key={button.id} onClick={() => onButtonClicked(button.id)}>{button.name}</Button>
                    })
                }
            </Button.Group>
        </Columns>
    );
}

function MenuButtons({ buttons, renderAs = 'text', selected, onButtonClicked }) {
    return (
        <Fragment>
            <Section>
                <Container>
                    {
                        renderAs === 'text' ?
                            <TextRender buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                            : <CardRender buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                    }
                </Container>
            </Section>
        </Fragment>
    );
}

export default MenuButtons;