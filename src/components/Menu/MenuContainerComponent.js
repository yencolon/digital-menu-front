import React from 'react';
import MenuCategoryContainer from './MenuCategoryContainerComponent';

function MenuContainer({ categories, renderAs = 'text', style = {},
    containerStyle = {}, innerContainerStyle = {}, cardStyle = {}, headingStyle = {}, titleCardStyle = {}, descriptionCardStyle = {} }) {
    const categoriesSize = categories.length / 2;
    const categoriesColTwo = categories.splice(0, categoriesSize);
    const categoriesColOne = categories;

    //const colSize = categoriesColTwo.length === 0 ? 1 : 2

    return (
        <div className={'mx-2 md:grid md:grid-cols-2'} >
            <div style={style}>
                {
                    categoriesColOne.map(category => {
                        return (
                            <div key={category.id} >
                                <MenuCategoryContainer
                                    title={category.name}
                                    description={category.description}
                                    items={category.items}
                                    renderAs={renderAs}
                                    headingStyle={headingStyle}
                                    containerStyle={containerStyle}
                                    innerContainerStyle={innerContainerStyle}
                                    cardStyle={cardStyle}
                                    titleCardStyle={titleCardStyle}
                                    descriptionCardStyle={descriptionCardStyle}
                                />
                            </div>)
                    })
                }
            </div>
            <div style={style}>
                {
                    categoriesColTwo.map(category => {
                        return (
                            <div key={category.id}>
                                <MenuCategoryContainer
                                    title={category.name}
                                    description={category.description}
                                    items={category.items}
                                    renderAs={renderAs}
                                    headingStyle={headingStyle}
                                    containerStyle={containerStyle}
                                    innerContainerStyle={innerContainerStyle}
                                    cardStyle={cardStyle}
                                    titleCardStyle={titleCardStyle}
                                    descriptionCardStyle={descriptionCardStyle}
                                />
                            </div>)
                    })
                }
            </div>

        </div>
    );
}

export default MenuContainer;