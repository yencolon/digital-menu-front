import React from 'react';

import ItemText from './MenuItemsTextComponent';
import ItemCard from './MenuItemCardComponent';

import 'assets/styles/menu-category-container.css';

function RenderAs({ items, renderAs = 'text' , style}) {
    switch (renderAs) {
        case 'text':
            return items.map(item => {
                return (
                    <ItemText key={item.id} title={item.name} description={item.description} price={item.price} style={style}/>
            )})
        case 'card':
            return items.map(item => {
                return <ItemCard key={item.id} title={item.name} description={item.description} price={item.price} image={item.image} style={style}/>
            })
        default:
            return <div>{renderAs}</div>
    }
}

function MenuCategoryContainer({ title, description, items, renderAs = 'text', containerStyle, cardStyle, headingStyle }) {
    return (
        <div className='m-5 flex flex-col content-center justify-center overflow-hidden shadow-lg' style={containerStyle}>
            <h1 className='font-bold subpixel-antialiased text-2xl text-center' style={headingStyle}>{title}</h1>
            <RenderAs items={items} renderAs={renderAs} style={cardStyle}/>
        </div>
    );
}

export default MenuCategoryContainer;