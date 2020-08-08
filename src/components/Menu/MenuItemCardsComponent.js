import React from 'react';

import ItemText from './MenuItemsTextComponent';

function ItemCard({ title, description, price, image }) {
    return (
        <div className="flex flex-col md:flex-row rounded overflow-hidden shadow-sm my-5 mx-5">
            <img className="w-full object-contain md:w-1/4" src={image} alt={description} />
            <ItemText title={title} description={description} price={price} />
        </div>
    );
}

export default ItemCard;