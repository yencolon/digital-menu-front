import React, { useEffect, useState } from 'react';

import MenuButtons from './MenuButtonsComponent';
import MenuContainer from './MenuContainerComponent';
import MenuBottomBrand from './MenuBottomBrandComponent';
import { API_URL } from 'shared/apiUrl';

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
    showDishAs }) {

    const [menuSelectedId, setMenuSelected] = useState(1);
    const [categoriesToShow, setCategoriesToShow] = useState([]);
    const [categories, setCategories] = useState([]);
    const [menu, setMenu] = useState([]);

    const onMenuSelected = (menuId) => {
        console.log(menuId)
        setMenuSelected(menuId)
        setCategoriesToShow(categories.filter(category => category.menuId === menuId))
    }

    const fetchMenus = async () => {
        return await (await fetch(API_URL + 'menus?storeId=1&_embed=categories')).json();
    }

    const fetchCategories = async () => {
        return await (await fetch(API_URL + 'categories?_embed=items')).json();
    }

    useEffect(() => {
        const menuApi = async () => {
            const fetchedCategories = await fetchCategories();
            setMenu(await fetchMenus())
            setCategories(fetchedCategories)
            setMenuSelected(1)
            setCategoriesToShow(fetchedCategories.filter(category => category.menuId === 1))
        }
        menuApi()
    }, [])

    return (
        <div className='flex flex-col justify-between' style={style}>
            <MenuButtons
                buttons={menu}
                selected={menuSelectedId}
                onButtonClicked={(menuId) => { onMenuSelected(menuId) }}
                renderAs={showCategoriesAs}
                backgroundColor={categoryButtonBackground}
                textColor={categoryButtonTextColor}
                buttonStyle={categoryButtonStyle}
                buttonSelectedStyle={categoryButtonSelectedStyle}
                stickButtons={stickButtonsMenu}
            />
            <MenuContainer
                categories={categoriesToShow}
                menuSelected={menuSelectedId}
                renderAs={showDishAs}
                containerStyle={containerStyle}
                headingStyle={containerHeadingStyle}
                innerContainerStyle={innerContainerStyle}
                cardStyle={categoryCardStyle}
                titleCardStyle={cardTitleStyle}
                descriptionCardStyle={cardDescriptionStyle}
                style={menuContainerStyle}
            />
            <MenuBottomBrand image={image} title={title} style={footerStyle} />
        </div>
    );

}

export default Menu;