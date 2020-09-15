import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter, Switch, useRouteMatch, useParams } from 'react-router-dom';
import Menu from 'components/menus/MenuComponent';
import MenuHeader from 'components/common/MenuHeaderComponent';
import MenuNavigation from 'components/common/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import GoogleFontLoader from 'react-google-font-loader';
import { API_URL } from 'shared/apiUrl';
import MenuBottomBrand from './common/MenuBottomBrandComponent';
import LoadingMenu from './common/LoadingComponent';

// mockup data.
const images = [
    'https://hapticoback.herokuapp.com/images/1.jpg',
    'https://hapticoback.herokuapp.com/images/2.jpg',
    'https://hapticoback.herokuapp.com/images/3.jpg',
    'https://hapticoback.herokuapp.com/images/4.jpg',
    'https://hapticoback.herokuapp.com/images/5.jpg',
    'https://hapticoback.herokuapp.com/images/6.jpg',
    'https://hapticoback.herokuapp.com/images/7.jpg',
    'https://hapticoback.herokuapp.com/images/8.jpg'
];

const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: '' },
    { network: 'twitter', identification: 'eltaco', url: '' },
    { network: 'instagram', identification: '@eltaco', url: '' },
    { network: 'whatsapp', identification: '+58 412 499 92 92', url: '' },
    { network: 'telegram', identification: '@eltaco', url: '' }
];

const workingDays = [
    { day: 'Miercoles', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Jueves', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Viernes', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Sábado', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Domingo', startTime: '7:00 PM', endTime: '3:00 AM' }
];

const paymentMethods = [
    { name: 'Zelle', identification: 'pedroperez@gmail.com', owner: '', extrainfo: 'Bank of America', image: 'https://hapticoback.herokuapp.com/images/zelle.png' },
    { name: 'Banesco', identification: '013465566656656565', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://hapticoback.herokuapp.com/images/banesco.jpg' },
    { name: 'BBVA Provincial', identification: '01154699797945454', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://hapticoback.herokuapp.com/images/bbva.png' },
    { name: 'Uphold', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://hapticoback.herokuapp.com/images/uphold.png' },
    { name: 'Paypal', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://hapticoback.herokuapp.com/images/paypal.png' },
    { name: 'Airtm', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://hapticoback.herokuapp.com/images/airtm.png' },
    { name: 'Pago Móvil', identification: '041245454585', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://hapticoback.herokuapp.com/images/Pago Movil.jpg' }
];

function LoadFonts ({ fonts }) {
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
}

LoadFonts.propTypes = {
    fonts: PropTypes.array
};

function Main ({ colorSpin = '#097392', logo }) {
    const LoadingComponent = <LoadingMenu color={colorSpin} image={logo} showImage={true} />;
    const TabsLoadingComponent = <LoadingMenu color={colorSpin} image={logo} />;
    const [styles, setStyles] = useState({});
    const [loading, setLoading] = useState(true);
    const { path, url } = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchStyles = async () => {
            return await (await fetch(API_URL + `api/menu/${id}/styles`)).json();
        };
        const loadStyles = async () => {
            const response = await fetchStyles();
            setTimeout(setLoading(false), 5000);
            setStyles(response.styles);
        };

        loadStyles();

        return () => {

        };
    }, [id]);

    const {
        categoryCardStyle,
        categoryCardHighLightStyle,
        categoryContainerStyle,
        contactStyle,
        imageLogo,
        mainFontFamily,
        menuFontFamily,
        navTitleStyle,
        categoryButtonBackground,
        paymentCardStyle,
        titleFontFamily,
        categoryButtonStyle,
        dollarRateStyle,
        menuStyle,
        menuContainerStyle,
        showCategoriesMenuAs,
        showDishAs,
        name,
        navBarContainerStyle,
        navItemStyle,
        stickButtonsMenu,
        categoryButtonSelectedStyle,
        categoryHeadingStyle,
        categoryInnerContainer,
        categoryCardProdutcDescriptionStyle,
        categoryCardProdutcTitleStyle,
        sectionHeadingStyle
    } = styles;

    // background: `url(${process.env.PUBLIC_URL}/images/bg.jpg)` }
    return (
        loading ? LoadingComponent
            : <Fragment>
                <LoadFonts fonts={[mainFontFamily, titleFontFamily, menuFontFamily]} />
                <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle} image={imageLogo} title={name} />
                <Switch>
                    <Route exact path={path}>
                        <Menu
                            categoryButtonBackground={categoryButtonBackground}
                            categoryButtonTextColor='white'
                            categoryButtonStyle={categoryButtonStyle}
                            categoryButtonSelectedStyle={categoryButtonSelectedStyle}

                            menuContainerStyle={menuContainerStyle}
                            containerHeadingStyle={categoryHeadingStyle}
                            innerContainerStyle={categoryInnerContainer}
                            categoryContainerStyle={categoryContainerStyle}

                            categoryCardStyle={categoryCardStyle}
                            categoryCardHighLightStyle={categoryCardHighLightStyle}
                            cardTitleStyle={categoryCardProdutcTitleStyle}
                            cardDescriptionStyle={categoryCardProdutcDescriptionStyle}
                            style={menuStyle}
                            showCategoriesAs={showCategoriesMenuAs}
                            showDishAs={showDishAs}
                            image={imageLogo}
                            title={name}
                            stickButtonsMenu={stickButtonsMenu}
                            loading={loading}
                            loadingComponent={TabsLoadingComponent}
                        />
                    </Route>
                    <Route path={`${path}/contact`}>
                        <ContactUs
                            titleStyle={sectionHeadingStyle}
                            imagesToShow={images}
                            socialLinks={socialLinks}
                            workingDays={workingDays}
                            containerStyle={contactStyle}
                            loadingComponent={TabsLoadingComponent}
                        />
                    </Route>
                    <Route path={`${path}/payments`}>
                        <PaymentMethods
                            titleStyle={sectionHeadingStyle}
                            paymentsMethods={paymentMethods}
                            cardContainerStyle={paymentCardStyle}
                            dollarRateStyle={dollarRateStyle}
                            loadingComponent={TabsLoadingComponent}
                        />
                    </Route>
                    {/* <Route path={`${path}/delivery`}>
                        <Delivery
                            titleStyle={sectionHeadingStyle}
                            deliveryCardStyle={deliveryCardStyle}
                            deliveries={deliveries}
                            loadingComponent={TabsLoadingComponent}
                        />
                    </Route> */}
                    <Redirect from='*' to={url}></Redirect>
                </Switch>
                <MenuBottomBrand image={imageLogo} title={name} style={{}} />
                <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={navItemStyle} hasDelivery={false} />
            </Fragment>
    );
}

Main.propTypes = {
    colorSpin: PropTypes.string,
    logo: PropTypes.string
};

export default withRouter(Main);
