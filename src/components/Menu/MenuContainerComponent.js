import React from 'react';

import MenuCategoryContainer from './MenuCategoryContainerComponent';
function MenuTiles({ columns = 2, categories }) {

}

function MenuContainer({ categories, renderAs = 'text', containerStyle, cardStyle, headingStyle }) {
    const categoriesSize = categories.length / 2;
    const categoriesColTwo = categories.splice(0, categoriesSize);
    const categoriesColOne = categories;

    //const colSize = categoriesColTwo.length === 0 ? 1 : 2

    return (
        <div className={'mx-2 my-2 md:my-5 md:grid md:grid-cols-2'}>
            <div>
                {
                    categoriesColOne.map(category => {
                        return (
                            <div key={category.id} >
                                <MenuCategoryContainer
                                    title={category.name}
                                    description={category.description}
                                    items={category.items}
                                    renderAs={renderAs}
                                    containerStyle={containerStyle}
                                    cardStyle={cardStyle}
                                    headingStyle={headingStyle}
                                />
                            </div>)
                    })
                }
            </div>
            <div>
                {
                    categoriesColTwo.map(category => {
                        return (
                            <div key={category.id}>
                                <MenuCategoryContainer
                                    title={category.name}
                                    description={category.description}
                                    items={category.items}
                                    renderAs={renderAs}
                                    containerStyle={containerStyle}
                                    cardStyle={cardStyle}
                                    headingStyle={headingStyle}
                                />
                            </div>)
                    })
                }
            </div>

        </div>
    );
}

export default MenuContainer;