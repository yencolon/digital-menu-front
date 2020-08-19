import React from 'react';


function ItemText({ title, description, price, containerStyle, titleStyle, descriptionStyle }) {
    return (
        <div className="px-2 py-2 w-full" style={containerStyle}>
            <h1 className="font-bold text-lg" style={titleStyle}>{title}</h1>
            <p className="text-sm" style={descriptionStyle} >{description}</p>
            <p className="text-xs" style={descriptionStyle}>{price}</p>
        </div>
    );
}

export default ItemText;