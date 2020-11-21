import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuButtons from '../components/menus/MenuButtons';
import MenuCategory from '../components/menus/MenuCategory';
import MenuBanner from '../components/common/MenuBanner';
import { useThemeState } from 'context/MenuThemeContext';

const Menu = ({ menu, defaultCategorySelectedId }) => {
    const theme = useThemeState();
    const [categorySelectedId, setCategorySelected] = useState(defaultCategorySelectedId);
    const [subCategoryToShow, setSubCategoriesToShow] = useState([]);
    const [categories, setCategories] = useState([]);

    const onCategorySelected = (categoryId) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setCategorySelected(categoryId);
        setSubCategoriesToShow(categories.filter(category => category.id === categoryId)[0].subCategories);
    };

    useEffect(() => {
        if (menu.categories !== undefined) {
            setCategories(menu.categories);
            if (defaultCategorySelectedId !== null) {
                setSubCategoriesToShow(menu.categories.filter(category => category.id === defaultCategorySelectedId)[0].subCategories);
            } else {
                setCategorySelected(menu.categories[0].id);
                setSubCategoriesToShow(menu.categories[0].subCategories);
            }
        }
    }, [defaultCategorySelectedId, menu, menu.categories]);

    return (
        <div className='flex flex-col justify-between' style={theme.menu.menuStyle}>
            <MenuBanner hasBanner={theme.booleans.bannerOnMenu} images={theme.assets.advertisementImages} />
            <MenuButtons
                buttons={categories}
                selected={categorySelectedId || defaultCategorySelectedId}
                onButtonClicked={(categoryId) => { onCategorySelected(categoryId) }}
                renderAs={theme.literals.showCategoryButtonsAs}
                backgroundColor={theme.colors.categoryButtonBackground}
                backgroundActiveColor={theme.menu.buttons.categoryButtonActiveBackground}
                buttonStyle={theme.menu.buttons.categoryButtonStyle}
                buttonSelectedStyle={theme.menu.buttons.categoryButtonSelectedStyle}
                stickButtons={theme.booleans.stickButtonsMenu}
            />
            <MenuCategory
                subCategories={subCategoryToShow}
            />
        </div>
    );
};

Menu.propTypes = {
    menu: PropTypes.object,
    defaultCategorySelectedId: PropTypes.number
};

export default Menu;
