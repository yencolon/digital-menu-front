import React, { Fragment } from 'react';

import Heading from 'react-bulma-components/lib/components/heading';

function ItemText({ title, description, price }) {
    return (
        <Fragment>
            <Heading size={6}>{title}</Heading>
            <p>{description}</p>
            <p>{price}</p>
        </Fragment>
    );
}

export default ItemText;