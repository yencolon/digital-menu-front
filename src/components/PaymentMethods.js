import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading/heading';

function PaymentMethods(){
    return(
        <div>
        <Section>
            <Heading>
                Metodos de pago
            </Heading>
            <p>
                En esta seccion va informacion de Metodos de pago que acepta el local
            </p>
        </Section>
    </div>
    )
}

export default PaymentMethods;