import React from 'react';

import 'assets/styles/menu-bottom-brand.css'
function MenuBottomBrand({ title, image, style }) {
    return (
        <div className='flex flex-col items-center justify-center full-w mb-20' style={style}>
            <img className='rounded-full h-120 w-120 flex items-center justify-center bg-black' src={image} alt='logo' height={150} width={150} />
            {/* <h1 className='text-xl'>{title}</h1> */}
        </div>
    );
}

export default MenuBottomBrand;