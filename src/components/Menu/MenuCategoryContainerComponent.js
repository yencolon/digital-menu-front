import React from 'react';
import ItemText from './MenuItemsTextComponent';

import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import ItemCard from './MenuItemCardsComponent';
import Container from 'react-bulma-components/lib/components/container/container';

import 'styles/menu-category-container.css';

function RenderAs({ items, renderAs = 'text' }) {
    switch (renderAs) {
        case 'text':
            return items.map(item => {
                return (
                    <Section>
                        <ItemText key={item.id} title={item.name} description={item.description} price={item.price} />
                    </Section>)
            })
        case 'card':
            return items.map(item => {
                return <ItemCard key={item.id} title={item.name} description={item.description} price={item.price} />
            })
        default:
            break;
    }
}

function MenuCategoryContainer({ title, description, items, renderAs = 'text', containerStyle, headingStyle }) {
    return (
        <div className='menu-category-box' style={containerStyle}>
            <Heading size={4} className='menu-category-title' style={headingStyle}>{title}</Heading>
            {/* <Heading subtitle renderAs="p">{description}</Heading> */}
            <RenderAs items={items} renderAs={renderAs} />
        </div>
    );
}

export default MenuCategoryContainer;