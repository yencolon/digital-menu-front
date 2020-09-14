import React from 'react';
import PropTypes, { object } from 'prop-types';
import ItemText from './MenuItemsTextComponent';
import ItemCard from './MenuItemCardComponent';

function RenderAs ({ items, renderAs = 'text', itemContainerStyle, itemHighLightStyle, itemTitleStyle, itemDescriptionStyle }) {
    switch (renderAs) {
    case 'text':
        return items.map(item => {
            return (
                <ItemText key={item.id} title={item.title} description={item.description} price={item.price} highlight={item.highlight} image={item.image} containerStyle={itemContainerStyle} highLightStyle={itemHighLightStyle} titleStyle={itemTitleStyle} descriptionStyle={itemDescriptionStyle} />
            );
        });
    case 'card':
        return items.map(item => {
            return <ItemCard key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} style={itemContainerStyle} />;
        });
    default:
        return <div>{renderAs}</div>;
    }
}

RenderAs.propTypes = {
    items: PropTypes.arrayOf(object),
    renderAs: PropTypes.oneOf(['text', 'card']),
    itemContainerStyle: PropTypes.object,
    itemHighLightStyle: PropTypes.object,
    itemTitleStyle: PropTypes.object,
    itemDescriptionStyle: PropTypes.object
};

function MenuCategoryContainer ({
    title, description, items, renderAs = 'text',
    innerContainerStyle = {}, containerStyle = {}, cardStyle = {}, cardHighLightStyle = {}, headingStyle = {}, titleCardStyle = {}, descriptionCardStyle = {}
}) {
    return (
        <section className='mt-1 mb-10 mx-5 md:mx-5 md:mt-5 md:mb-20 flex flex-col content-center justify-center' style={containerStyle}>
            <h1 className='font-bold subpixel-antialiased text-4xl text-center' style={headingStyle}>{title}</h1>
            <div style={innerContainerStyle}>
                <RenderAs items={items} renderAs={renderAs} itemTitleStyle={titleCardStyle} itemContainerStyle={cardStyle} itemHighLightStyle={cardHighLightStyle} itemDescriptionStyle={descriptionCardStyle} />
            </div>
        </section>
    );
}

MenuCategoryContainer.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    items: PropTypes.arrayOf(object),
    renderAs: PropTypes.oneOf(['text', 'card']),
    innerContainerStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    cardStyle: PropTypes.object,
    cardHighLightStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    titleCardStyle: PropTypes.object,
    descriptionCardStyle: PropTypes.object
};

export default MenuCategoryContainer;
