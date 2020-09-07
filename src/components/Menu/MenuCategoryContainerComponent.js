import React from 'react';

import ItemText from './MenuItemsTextComponent';
import ItemCard from './MenuItemCardComponent';
import { Slide } from "react-awesome-reveal";

function RenderAs({ items, renderAs = 'text', itemContainerStyle, itemTitleStyle, itemDescriptionStyle }) {
    switch (renderAs) {
        case 'text':
            return items.map(item => {
                return (
                    <Slide direction='up' cascade triggerOnce>
                        <ItemText key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} containerStyle={itemContainerStyle} titleStyle={itemTitleStyle} descriptionStyle={itemDescriptionStyle} />
                    </Slide>
                )
            })
        case 'card':
            return items.map(item => {
                return <ItemCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} style={itemContainerStyle} />
            })
        default:
            return <div>{renderAs}</div>
    }
}

function MenuCategoryContainer({ title, description, items, renderAs = 'text',
    innerContainerStyle = {}, containerStyle = {}, cardStyle = {}, headingStyle = {}, titleCardStyle = {}, descriptionCardStyle = {} }) {
    return (
        <div className='mt-1 mb-10 mx-5 md:mx-5 md:mt-5 md:mb-20 flex flex-col content-center justify-center' style={containerStyle}>
            <h1 className='font-bold subpixel-antialiased text-4xl text-center' style={headingStyle}>{title}</h1>
            <div style={innerContainerStyle}>

                <RenderAs items={items} renderAs={renderAs} itemTitleStyle={titleCardStyle} itemContainerStyle={cardStyle} itemDescriptionStyle={descriptionCardStyle} />

            </div>
        </div>
    );
}

export default MenuCategoryContainer;