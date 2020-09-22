import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuButtons from './MenuButtonsComponent';
import MenuContainer from './MenuContainerComponent';
import MenuBanner from './MenuBannerComponent';
import { API_URL } from 'shared/apiUrl';
import { useParams } from 'react-router-dom';

// VER LA POSIBILIDAD DE UTILIZAR CONTEXTO PARA PASAR PASAR LOS PROPS
function Menu ({
    image,
    title,
    menuContainerStyle,
    showCategoriesAs,
    style,
    footerStyle,
    containerStyle,
    categoryCardStyle,
    categoryCardHighLightStyle,
    cardTitleStyle,
    cardDescriptionStyle,
    innerContainerStyle,
    categoryButtonSelectedStyle,
    categoryButtonStyle,
    categoryButtonBackground,
    categoryButtonTextColor,
    containerHeadingStyle,
    stickButtonsMenu,
    showDishAs,
    loadingComponent
}) {
    ///const classes = createUseStyles({ style });
    const { id } = useParams();

    // state
    const [loading, setLoading] = useState(true);
    const [categorySelectedId, setCategorySelected] = useState(1);
    const [cardCategoryToShow, setCardCategoriesToShow] = useState([]);
    const [cardCategories, setCardCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    const onCategorySelected = (categoryId) => {
        setCategorySelected(categoryId);
        setCardCategoriesToShow(cardCategories.filter(category => category.id === categoryId)[0].items);
    };

    const fetchMenu = async () => {
        return await (await fetch(API_URL + `api/menu/${1}`)).json();
    };

    useEffect(() => {
        const menuApi = async () => {
            const fetchedMenu = await fetchMenu();
            const menu = fetchedMenu.menu;
            setCategories(menu.categories);
            setCategorySelected(menu.categories[0].id);
            setCardCategoriesToShow(menu.categories[0].items);
            setCardCategories(menu.categories);
            setLoading(false);
        };
        menuApi();
    }, []);

    return (
        loading ? loadingComponent
            : <main className='flex flex-col justify-between' style={style}>
                <MenuBanner />
                <MenuButtons
                    buttons={categories}
                    selected={categorySelectedId}
                    onButtonClicked={(categoryId) => { onCategorySelected(categoryId) }}
                    renderAs={showCategoriesAs}
                    backgroundColor={categoryButtonBackground}
                    textColor={categoryButtonTextColor}
                    buttonStyle={categoryButtonStyle}
                    buttonSelectedStyle={categoryButtonSelectedStyle}
                    stickButtons={stickButtonsMenu}
                />
                <MenuContainer
                    categories={cardCategoryToShow}
                    renderAs={showDishAs}
                    containerStyle={containerStyle}
                    headingStyle={containerHeadingStyle}
                    innerContainerStyle={innerContainerStyle}
                    cardStyle={categoryCardStyle}
                    cardHighLightStyle={categoryCardHighLightStyle}
                    titleCardStyle={cardTitleStyle}
                    descriptionCardStyle={cardDescriptionStyle}
                    style={menuContainerStyle}
                />
            </main>
    );
}

Menu.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    menuContainerStyle: PropTypes.object,
    showCategoriesAs: PropTypes.oneOf(['tabs', 'buttons']),
    style: PropTypes.object,
    footerStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    categoryCardStyle: PropTypes.object,
    categoryCardHighLightStyle: PropTypes.object,
    cardTitleStyle: PropTypes.object,
    cardDescriptionStyle: PropTypes.object,
    innerContainerStyle: PropTypes.object,
    categoryButtonSelectedStyle: PropTypes.object,
    categoryButtonStyle: PropTypes.object,
    categoryButtonBackground: PropTypes.object,
    categoryButtonTextColor: PropTypes.string,
    containerHeadingStyle: PropTypes.object,
    stickButtonsMenu: PropTypes.bool,
    showDishAs: PropTypes.oneOf(['text', 'card']),
    loadingComponent: PropTypes.element
};

export default Menu;
