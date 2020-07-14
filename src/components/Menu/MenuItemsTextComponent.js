import React, { Fragment } from 'react';

import Columns from 'react-bulma-components/lib/components/columns';

function ItemInfo({ title, description, price }) {
    return (
        <Columns.Column size={6} centered={true}>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </Columns.Column>
    )
}

function ItemText({ items }) {
    return (
        <Fragment>
            <Columns>
                {items.map(item => {
                    return <ItemInfo title={item.title} description={item.description} price={item.price} />
                })}
            </Columns>
        </Fragment>
    );
}

export default ItemText;