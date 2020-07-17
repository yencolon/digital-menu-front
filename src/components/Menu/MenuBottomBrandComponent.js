import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading/heading';

import 'styles/menu-bottom-brand.css'
function MenuBottomBrand() {
    return (
        <div >
           <Section className='brand-container'>
               <Heading>NOMBRE.</Heading>
               <Heading>LOGO.</Heading>
           </Section>
        </div>
    );
}

export default MenuBottomBrand;