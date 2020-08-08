import React from 'react';

import ItemText from './MenuItemsTextComponent';
import ItemCard from './MenuItemCardsComponent';

import 'assets/styles/menu-category-container.css';

function RenderAs({ items, renderAs = 'text' }) {
    switch (renderAs) {
        case 'text':
            return items.map(item => {
                return (
                    <ItemText key={item.id} title={item.name} description={item.description} price={item.price} />
            )})
        case 'card':
            return items.map(item => {
                return <ItemCard key={item.id} title={item.name} description={item.description} price={item.price} image={item.image}/>
            })
        default:
            return <div>{renderAs}</div>
    }
}

function MenuCategoryContainer({ title, description, items, renderAs = 'text', containerStyle, headingStyle }) {
    return (
        <div className='m-5 flex flex-col content-center justify-center' style={containerStyle}>
            <h1 className='font-bold text-xl underline menu-category-title' style={headingStyle}>{title}</h1>
            <RenderAs items={items} renderAs={renderAs} />
        </div>
    );
}

export default MenuCategoryContainer;