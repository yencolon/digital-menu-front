import React from 'react';
import PropTypes, { object } from 'prop-types';
import MenuCategoryContainer from './MenuCategoryContainerComponent';

function MenuContainer ({
    categories, renderAs = 'text', style = {},
    containerStyle = {}, innerContainerStyle = {}, cardStyle = {}, cardHighLightStyle = {}, headingStyle = {}, titleCardStyle = {}, descriptionCardStyle = {}
}) {
    if (categories.length === 0) return <div></div>;

    const categoriesSize = Math.ceil(categories.length / 2);
    const categoriesColOne = categories.slice(0, categoriesSize);
    const categoriesColTwo = categories.slice(categoriesSize, categories.length);

    // const colSize = categoriesColTwo.length === 0 ? 1 : s
    return (
        <section className='mx-2 md:grid md:grid-cols-2' >
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
                                    cardHighLightStyle={cardHighLightStyle}
                                    titleCardStyle={titleCardStyle}
                                    descriptionCardStyle={descriptionCardStyle}
                                />
                            </div>);
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
                                    cardHighLightStyle={cardHighLightStyle}
                                    titleCardStyle={titleCardStyle}
                                    descriptionCardStyle={descriptionCardStyle}
                                />
                            </div>);
                    })
                }
            </div>
        </section>
    );
}

MenuContainer.propTypes = {
    categories: PropTypes.arrayOf(object),
    renderAs: PropTypes.oneOf(['text', 'card']),
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    innerContainerStyle: PropTypes.object,
    cardStyle: PropTypes.object,
    cardHighLightStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    titleCardStyle: PropTypes.object,
    descriptionCardStyle: PropTypes.object
};

export default MenuContainer;
