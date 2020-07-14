import React, { Component } from 'react';
import ItemText from './MenuItemsTextComponent';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import MenuButtons from './MenuButtonsComponent';

const items = [
    {
        title: 'Milanesa de Pollo Agrio',
        description: 'Pollo en milanea con salsa agria de mango y tamarindo, banhado en un topin de cambur caramelizado',
        price: 10
    },
    {
        title: 'Milanesa de Pollo Agrio',
        description: 'Pollo en milanea con salsa agria de mango y tamarindo, banhado en un topin de cambur caramelizado',
        price: 10
    },
    {
        title: 'Milanesa de Pollo Agrio',
        description: 'Pollo en milanea con salsa agria de mango y tamarindo, banhado en un topin de cambur caramelizado',
        price: 10
    },
    {
        title: 'Milanesa de Pollo Agrio',
        description: 'Pollo en milanea con salsa agria de mango y tamarindo, banhado en un topin de cambur caramelizado',
        price: 10
    }
]

const categories = [
    {
        title: 'Comida',
        active: true
    },
    {
        title: 'Bebidas',
        active: false
    },
    {
        title: 'Postres',
        active: false
    }
]
class Menu extends Component {
    render() {
        return (
            <div>
                <MenuButtons buttons={categories}/>
                <Section>
                    <Container>
                        <ItemText items={items} />
                    </Container>
                </Section>
            </div>
        );
    }
}

export default Menu;