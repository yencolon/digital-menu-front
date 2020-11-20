import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useRouteMatch, useHistory } from 'react-router-dom';
import { useThemeState } from 'context/MenuThemeContext';
import CarouselComponent from 'components/common/Carousel';
import MenuLayout from 'layouts/MenuLayout';
import MenuRoutes from 'routes/MenuRoutes';
import AddToHomeScreenButton from 'components/common/AddToHomeScreenButton';
import { useStyleToClass } from 'utils/hooks';

const PickCategory = ({ categories, style, onClick }) => {
    if (categories.length < 2) return <Redirect to="/" />;

    return categories.map((category, index) => {
        return (
            <button
                key={index + ''}
                onClick={() => onClick(category.id)}
                className="text-white font-bold py-1 px-4 my-2 mx-2 focus:outline-none"
                style={style}
            >
                {category.title}
            </button>
        );
    });
};

const Main = ({ menu }) => {
    const theme = useThemeState();
    const classes = useStyleToClass(theme.picker);
    const history = useHistory();
    const { path, url } = useRouteMatch();
    const [showPicker, setShowPicker] = useState(
        theme.booleans.showInitialPicker
    );
    const [menuToShow, setMenuToShow] = useState({});
    const [defaultCategorySelectedId, setDefaultCategorySelectedId] = useState(
        null
    );

    useEffect(() => {
        if (!showPicker && menu && defaultCategorySelectedId === null) {
            setDefaultCategorySelectedId(menu.categories[0].id);
            setMenuToShow(menu);
        }
    }, [defaultCategorySelectedId, menu, showPicker]);

    const onCategorySelected = (categoryId) => {
        setDefaultCategorySelectedId(categoryId);
        setMenuToShow(menu);
        setShowPicker(false);
        history.replace(url);
    };

    if (showPicker && menu) {
        return (
            <div
                className={`flex flex-col items-center h-screen ${classes.pickerContainer}`}
            >
                <nav
                    className={`flex-col w-full py-10 z-30 ${classes.navBarContainerStyle}`}
                >
                    <img src={theme.assets.logo} className="m-auto w-64" />
                </nav>
                <AddToHomeScreenButton name="hola" />
                <CarouselComponent images={theme.assets.carouselImages} />
                <div
                    className={`flex flex-col md:block md:m-auto pt-10 ${classes.buttonsContainer}`}
                >
                    <PickCategory
                        categories={menu.categories}
                        onClick={onCategorySelected}
                        style={theme.picker.buttons}
                    />
                </div>
            </div>
        );
    }
    return (
        <MenuLayout>
            <MenuRoutes
                menuToShow={menuToShow}
                defaultCategorySelectedId={defaultCategorySelectedId}
                path={path}
                url={url}
            />
        </MenuLayout>
    );
};

Main.propTypes = {
    colorSpin: PropTypes.string,
    logo: PropTypes.string,
    menu: PropTypes.object
};

export default Main;
