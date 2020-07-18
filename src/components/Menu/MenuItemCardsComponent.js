import React, { Fragment } from 'react';

import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns/columns';


import ItemText from './MenuItemsTextComponent';
function ItemCard({ title, description, price, image }) {
    return (
        <Fragment>
            
                <Box paddingless={false}
                    responsive={{
                        mobile: {
                            display: {
                                value: 'block'
                            },
                        },
                        tablet: {
                            display: {
                                value: 'flex'
                            },
                        },
                        desktop: {
                            display: {
                                value: 'inline-flex',
                                only: true,
                            },
                        },
                        widescreen: {
                            display: {
                                value: 'inline-block',
                            },
                        },
                    }}
                >
                    <Media>
                        <Columns breakpoint="mobile">
                            <Columns.Column
                                mobile={{
                                    size: '12'
                                }}
                                tablet={{
                                    size: 'is-one-third',
                                }}
                                desktop={{
                                    size: 'is-one-third',
                                }}
                                widescreen={{
                                    size: 'is-one-third',
                                }}
                                fullhd={{
                                    size: 'is-one-third',
                                }}
                            >
                                <Media.Item renderAs="figure" position="left">
                                    <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                                </Media.Item>
                            </Columns.Column>
                            <Columns.Column
                                mobile={{
                                    size: '12'
                                }}
                                tablet={{
                                    size: 'is-two-third',
                                }}
                                desktop={{
                                    size: 'is-two-third',
                                }}
                                widescreen={{
                                    size: 'is-two-third',
                                }}
                                fullhd={{
                                    size: 'is-two-third',
                                }}
                            >
                                <Media.Item>
                                    <ItemText title={title} description={description} price={price} />
                                </Media.Item>
                            </Columns.Column>
                        </Columns>
                    </Media>
                </Box>
            
        </Fragment>
    );
}

export default ItemCard;