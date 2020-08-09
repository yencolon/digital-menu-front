import React, { Fragment } from 'react';


function ItemText({ title, description, price }) {
    return (
        <div class="px-6 py-4 w-full">
            <h1 className="font-bold text-md mb-2">{title}</h1>
            <p className="text-justify">{description}</p>
            <p className="font-normal text-xl mt-2 text-right"><b>{price}</b></p>
        </div>
    );
}

export default ItemText;