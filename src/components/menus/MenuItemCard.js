import React from 'react';
import PropTypes from 'prop-types';
import ItemText from './MenuItemsText';
import { useThemeState } from 'context/MenuThemeContext';

function ItemCard ({ title, description, price, image }) {
    const theme = useThemeState();
    return (
        <div className="flex flex-col-reverse md:flex-row my-5 mx-5 px-5 py-5" style={theme.product.productContainerStyle}>
            <ItemText title={title} description={description} price={price} />
            <img className="w-full object-scale-down md:w-1/4 md:h-14" src={image} alt={description} />
        </div>
    );
}

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};

export default ItemCard;
