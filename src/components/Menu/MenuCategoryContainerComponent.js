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

function MenuCategoryContainer({ title, description, items, renderAs = 'text', innerContainerStyle = {}, containerStyle = {}, cardStyle ={}, headingStyle = {} }) {
    return (
        ///
        <div className='mt-5 mb-20 mx-5 md:mx-5 md:mt-5 md:mb-20 flex flex-col content-center justify-center' style={containerStyle}>
            <h1 className='font-bold subpixel-antialiased text-2xl text-center mb-3' style={headingStyle}>{title}</h1>
            {/* <div style={innerContainerStyle}>
                <RenderAs items={items} renderAs={renderAs} style={cardStyle}/>
            </div> */}
        </div>
    );
}

export default MenuCategoryContainer;