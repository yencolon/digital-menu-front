import React from 'react';

import ItemText from './MenuItemsTextComponent';

function ItemCard({ title, description, price, image, style }) {
    return (
        <div className="flex flex-col-reverse md:flex-row my-5 mx-5 px-5 py-5" style={style}>
            <ItemText title={title} description={description} price={price} />
            <img className="w-full object-scale-down md:w-1/4 md:h-14" src={image} alt={description} />
        </div>
    );
}

export default ItemCard;