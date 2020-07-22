import React, { Fragment } from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container/container';

function ItemText({ title, description, price }) {
    return (
        <Fragment>
            <Container>
                <Heading size={6}>{title}</Heading>
            </Container>
            <p>{description}</p>
            <p><b>{price}</b></p>
        </Fragment>
    );
}

export default ItemText;