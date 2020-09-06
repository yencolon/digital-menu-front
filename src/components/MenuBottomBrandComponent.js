import React from 'react';

import 'assets/styles/menu-bottom-brand.css'
function MenuBottomBrand({ title, image, style, addressLine = 'Av. Anzoátegui', addresCity = 'Lechería, Venezuela' }) {
    return (
        <div className='flex flex-col items-center justify-center full-w pb-20 mt-2' style={style}>
            <div className='rounded-full h-120 w-120 flex items-center justify-center'>
                <img src={image} alt='logo' height={160} width={160} />
            </div>
            <div className='text-center text-xs'>
                <a className='block' href='https://goo.gl/maps/u57TnknURpbaNg7y8' target="_blank" rel="noopener noreferrer">
                    <h6>{addressLine}</h6>
                    <h6>{addresCity}</h6>
                </a>
                <a href="tel:04144395260"> 0414 439 52 60</a>
            </div>
        </div>
    );
}

export default MenuBottomBrand;