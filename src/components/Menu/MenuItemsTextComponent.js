import React, { Fragment } from 'react';


function ItemText({ title, description, price }) {
    return (
        <div class="px-6 py-4">
            <h1 className="font-semibold text-md mb-2">{title}</h1>
            <p>{description}</p>
            <p><b>{price}</b></p>
        </div>
    );
}

export default ItemText;