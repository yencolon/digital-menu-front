import React from 'react';


function ItemText({ title, description, price, style }) {
    return (
        <div class="px-6 py-4 w-full" style={style}>
            <h1 className="font-bold text-md mb-2">{title}</h1>
            <p className="text-justify">{description}</p>
            <p className="font-normal mt-2">{price}</p>
        </div>
    );
}

export default ItemText;