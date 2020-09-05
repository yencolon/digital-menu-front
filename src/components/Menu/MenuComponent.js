import React, { useEffect, useState } from 'react';

import MenuButtons from './MenuButtonsComponent';
import MenuContainer from './MenuContainerComponent';
import MenuBottomBrand from '../MenuBottomBrandComponent';
import { API_URL } from 'shared/apiUrl';
import { useParams } from 'react-router-dom';

//VER LA POSIBILIDAD DE UTILIZAR CONTEXTO PARA PASAR PASAR LOS PROPS
function Menu({
    image,
    title,
    menuContainerStyle,
    showCategoriesAs,
    style,
    footerStyle,
    containerStyle,
    categoryCardStyle,
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
    loadingComponent,
}) {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [categorySelectedId, setCategorySelected] = useState(1);
    const [cardCategoryToShow, setCardCategoriesToShow] = useState([]);
    const [cardCategories, setCardCategories] = useState([]);
    const [categories, setCategories] = useState([]);
   
    const onCategorySelected = (categoryId) => {
        setCategorySelected(categoryId)
        setCardCategoriesToShow(cardCategories.filter(category => category.id === categoryId)[0].items);
    }

    const fetchMenu = async () => {
        return await (await fetch(API_URL + `menu/${id}`)).json();
    }

    useEffect(() => {
        const menuApi = async () => {
            const fetchedMenu = await fetchMenu();
            const menu = fetchedMenu.menu
            setCategories(menu.categories)
            setCategorySelected(menu.categories[0].id)
            setCardCategoriesToShow(menu.categories[0].items)
            setCardCategories(menu.categories)
            setLoading(false)
        }
        menuApi()
    }, [])

    return (
        loading ? loadingComponent :
            <div className='flex flex-col justify-between' style={style}>
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
                    titleCardStyle={cardTitleStyle}
                    descriptionCardStyle={cardDescriptionStyle}
                    style={menuContainerStyle}
                />
            </div>
    );

}

export default Menu;