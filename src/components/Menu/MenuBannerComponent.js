import React from 'react'
import { API_URL } from 'shared/apiUrl'

export default function MenuBanner() {
    return (
        <div className='flex items-center justify-center mb-5'>
            <img src={API_URL + 'images/banner.png'} alt='promo' ></img>
        </div>
    )
}
