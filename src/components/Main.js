import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import Menu from 'components/menus/Menu';
import MenuHeader from 'components/common/MenuHeader';
import MenuNavigation from 'components/common/MenuNavigation';
import ContactUs from 'components/Contact';
import PaymentMethods from 'components/PaymentMethods';
import GoogleFontLoader from 'react-google-font-loader';
import MenuBottomBrand from './common/MenuBottomBrand';
import LoadingMenu from './common/LoadingComponent';
import Delivery from './Delivery';
import { useThemeState } from 'context/MenuThemeContext';
import CarouselComponent from './common/Carousel';
// mockup data.

const LoadFonts = ({ fonts }) => {
    const filterFonts = fonts.filter(font => font !== undefined);
    if (filterFonts.length === 0) return <div></div>;

    const fontsToLoad = filterFonts.map(font => {
        return {
            font: font,
            weights: [400, '500', '600', '700', '800', 900]
        };
    });

    return (
        <GoogleFontLoader
            fonts={fontsToLoad}
        />
    );
};

LoadFonts.propTypes = {
    fonts: PropTypes.array
};

const PickLocation = ({ locations, style, onClick }) => {
    if (locations.length < 2) return <PickMenu menus={locations[0].menus} style={style} onClick={onClick} />;
    return locations.map((location, index) => {
        return <button key={index + ''} className='text-white font-bold py-1 px-4 my-2 mx-2 focus:outline-none' style={style}>
            {location.name}
        </button>;
    });
};

const PickMenu = ({ menus, style, onClick }) => {
    if (menus.length < 2) return <PickCategory categories={menus[0].categories} style={style} onClick={onClick} />;
    return menus.map((menu, index) => {
        return <button key={index + ''} className='text-white font-bold py-1 px-4 my-2 mx-2 focus:outline-none' style={style}>{menu.name}</button>;
    });
};

const PickCategory = ({ categories, style, onClick }) => {
    if (categories.length < 2) return <Redirect to='/' />;

    return categories.map((category, index) => {
        return <button key={index + ''} onClick={() => onClick(category.id)} className='text-white font-bold py-1 px-4 my-2 mx-2 focus:outline-none' style={style}>{category.title}</button>;
    });
};

const Main = ({ colorSpin = '#097392', logo, locations }) => {
    const theme = useThemeState();
    const history = useHistory();
    const { path, url } = useRouteMatch();
    const [showPicker, setShowPicker] = useState(theme.booleans.showInitialPicker);
    const [menuToShow, setMenuToShow] = useState({});
    const [defaultCategorySelectedId, setDefaultCategorySelectedId] = useState(null);

    useEffect(() => {
        if (!showPicker && locations.length > 0 && defaultCategorySelectedId === null) {
            setDefaultCategorySelectedId(locations[0].menus[0].categories[0].id);
            setMenuToShow(locations[0].menus[0]);
        }
    }, [defaultCategorySelectedId, locations, showPicker]);

    const onCategorySelected = (categoryId) => {
        setDefaultCategorySelectedId(categoryId);
        setMenuToShow(locations[0].menus[0]);
        setShowPicker(false);
        history.replace(url);
    };

    if (showPicker && locations.length > 0) {
        return (
            <div className='flex flex-col items-center h-screen' style={theme.picker.pickerContainer}>
                <LoadFonts fonts={theme.fonts} />
                <nav className='flex-col w-full py-10 z-30' style={theme.picker.navBarContainerStyle} >
                    <img src={theme.assets.logo} className='m-auto w-64' />
                </nav>
                {/* <section style={theme.picker.navBarContainerStyle} > */}
                <CarouselComponent images={theme.assets.carouselImages}/>
                {/* </section> */}
                <div className='flex flex-col md:block md:m-auto pt-10' style={theme.picker.buttonsContainer}>
                    <PickLocation locations={locations} onClick={onCategorySelected} style={theme.picker.buttons} />
                </div>
            </div>
        );
    }
    return (
        <main className='flex flex-col justify-between' style={{ backgroundColor: theme.colors.backgroundColor }}>
            <LoadFonts fonts={theme.fonts} />
            <MenuHeader />
            <Switch>
                <Route exact path={path}>
                    <Menu
                        menu={menuToShow}
                        defaultCategorySelectedId={defaultCategorySelectedId}
                    />
                </Route>
                <Route exact path={`${path}/contact`}>
                    <ContactUs />
                </Route>
                <Route exact path={`${path}/payments`}>
                    <PaymentMethods />
                </Route>
                <Route path={`${path}/delivery`}>
                    <Delivery />
                </Route>
                <Redirect from='*' to={`${url}`}></Redirect>
            </Switch>
            <MenuBottomBrand />
            <MenuNavigation containerStyle={theme.navBottom.navBarContainerStyle} itemStyle={theme.navBottom.navItemStyle} hasDelivery={theme.booleans.hasDelivery} />
        </main>
    );
};

Main.propTypes = {
    colorSpin: PropTypes.string,
    logo: PropTypes.string,
    locations: PropTypes.array
};

export default withRouter(Main);
