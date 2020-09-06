import React from 'react';
import MenuCategoryContainer from './MenuCategoryContainerComponent';

function MenuContainer({ categories, renderAs = 'text', style = {},
    containerStyle = {}, innerContainerStyle = {}, cardStyle = {}, headingStyle = {}, titleCardStyle = {}, descriptionCardStyle = {} }) {
    
    if (categories.length === 0) return <div></div>

    const categoriesSize = categories.length / 2;
    const categoriesColOne = categories.slice(0, categoriesSize);
    const categoriesColTwo = categories.slice(categoriesSize, categories.length);

    //const colSize = categoriesColTwo.length === 0 ? 1 : 2

    return (
        <div className={'mx-2 md:grid md:grid-cols-2'} >
            <div style={style}>
                {
                    categoriesColOne.map(category => {
                        return (
                            <div key={category.id} >
                                <MenuCategoryContainer
                                    title={category.title}
                                    description={category.description}
                                    items={category.products}
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
                                    title={category.title}
                                    description={category.description}
                                    items={category.products}
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