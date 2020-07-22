import React, { Fragment, useEffect } from 'react';

import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Tabs from 'react-bulma-components/lib/components/tabs';
import Navbar from 'react-bulma-components/lib/components/navbar';

import 'styles/menu-button-group.css';

function CardRender({ buttons, selected, onButtonClicked }) {
    return (
        <Columns centered={true}>
            <Tabs fullwidth={true} align='centered' >
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

    useEffect(() => {
        const header = document.getElementById("buttomGroup");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div id='buttomGroup' className='button-group-container'>
            <Section className='button-group-section'>
                <Container>
                    {
                        renderAs === 'text' ?
                            <TextRender buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                            : <CardRender buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                    }
                </Container>
            </Section>
        </div>
    );
}

export default MenuButtons;