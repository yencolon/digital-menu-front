import React from 'react';

import 'assets/styles/menu-bottom-brand.css'
function MenuBottomBrand({ title, image }) {
    return (
        <div className='flex flex-col items-center justify-center full-w mb-20'>
            <img className='rounded-full h-20 w-20 flex items-center justify-center bg-black' src={image} alt='logo' height={80} width={80} />
            <h1 className='text-xl font-extrabold'>{title}</h1>
        </div>
    );
}

export default MenuBottomBrand;