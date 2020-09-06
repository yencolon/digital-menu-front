import React from 'react';

import 'assets/styles/menu-bottom-brand.css'
function MenuBottomBrand({ title, image, style, addressLine = 'Av. Anzoátegui', addresCity = 'Lechería, Venezuela' }) {
    return (
        <div className='flex flex-col items-center justify-center full-w pb-20 mt-2' style={style}>
            <div className='rounded-full h-120 w-120 flex items-center justify-center'>
                <img src={image} alt='logo' height={150} width={150} />
            </div>
            <div className='text-center'> 
                <h6>{addressLine}</h6>
                <h6>{addresCity}</h6>
            </div>
        </div>
    );
}

export default MenuBottomBrand;