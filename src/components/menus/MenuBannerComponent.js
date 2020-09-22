import React from 'react';
import { API_URL } from 'shared/apiUrl';
import { useScrollEvent } from 'shared/hooks/useScollEvent';

export default function MenuBanner () {
    const scroll = useScrollEvent('banner');

    return (
        <section id="banner" className={`flex items-center justify-center mb-5s`}>
            <figure>
                <img src={API_URL + 'images/banner.png'} alt='promo' ></img>
            </figure>
        </section>
    );
}
