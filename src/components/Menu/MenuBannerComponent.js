import React from 'react'

export default function MenuBanner() {
    return (
        <div className='flex items-center justify-center mb-5'>
            <img src={process.env.PUBLIC_URL + '/images/Banner Ad 22x9..png'} alt='promo' ></img>
        </div>
    )
}
