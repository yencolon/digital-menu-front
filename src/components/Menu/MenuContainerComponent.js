import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import MenuCategoryContainer from './MenuCategoryContainerComponent';

function MenuContainer({ categories, menuSelected }) {
    console.log(menuSelected)
    return (
        <div>
            <Section>
                <Columns>
                    {
                        categories.filter(category => category.menuId === menuSelected).map(category => {
                            return (
                                <Columns.Column size={6} key={category.id}>
                                    <MenuCategoryContainer title={category.name} description={category.description} items={category.items} />
                                </Columns.Column>)
                        })
                    }
                </Columns>
            </Section>
            <Section>
                <Columns>
                    {
                        categories.filter(category => category.menuId === menuSelected).map(category => {
                            return (
                                <Columns.Column size={6} key={category.id}>
                                    <MenuCategoryContainer title={category.name} description={category.description} items={category.items} renderAs='card' />
                                </Columns.Column>)
                        })
                    }
                </Columns>
            </Section>
        </div>
    );
}

export default MenuContainer;