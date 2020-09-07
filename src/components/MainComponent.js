import React, { useEffect, useState } from 'react';
import { Route, Redirect, withRouter, Switch, useRouteMatch, useParams } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';
import GoogleFontLoader from 'react-google-font-loader';
import { API_URL } from 'shared/apiUrl';
import MenuBottomBrand from './MenuBottomBrandComponent';
import LoadingMenu from './LoadingComponent';

//mockup data.
const images = [
    'https://haptico-back.herokuapp.com/images/1.jpg',
    'https://haptico-back.herokuapp.com/images/2.jpg',
    'https://haptico-back.herokuapp.com/images/3.jpg',
    'https://haptico-back.herokuapp.com/images/4.jpg',
    'https://haptico-back.herokuapp.com/images/5.jpg',
    'https://haptico-back.herokuapp.com/images/6.jpg',
    'https://haptico-back.herokuapp.com/images/7.jpg',
    'https://haptico-back.herokuapp.com/images/8.jpg',
]

const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: '' },
    { network: 'twitter', identification: 'eltaco', url: '' },
    { network: 'instagram', identification: '@eltaco', url: '' },
    { network: 'whatsapp', identification: '+58 412 499 92 92', url: '' },
    { network: 'telegram', identification: '@eltaco', url: '' },
]

const workingDays = [
    { day: 'Miercoles', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Jueves', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Viernes', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Sábado', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Domingo', startTime: '7:00 PM', endTime: '3:00 AM' },
]

const paymentMethods = [
    { name: 'Zelle', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: ' ', image: 'https://haptico-back.herokuapp.com/images/zelle.png' },
    { name: 'Banesco', identification: '013465566656656565', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://haptico-back.herokuapp.com/images/banesco.jpg' },
    { name: 'BBVA Provincial', identification: '01154699797945454', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://haptico-back.herokuapp.com/images/bbva.png' },
    { name: 'Uphold', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://haptico-back.herokuapp.com/images/uphold.png' },
    { name: 'Paypal', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://haptico-back.herokuapp.com/images/paypal.png' },
    { name: 'Airtm', identification: 'pedroperez@gmail.com', owner: 'Pedro Perez', extrainfo: '', image: 'https://haptico-back.herokuapp.com/images/airtm.png' },
    { name: "Pago Móvil", identification: '041245454585', owner: 'Pedro Perez', extrainfo: '22111000', image: 'https://haptico-back.herokuapp.com/images/Pago Movil.jpg', },
]


const deliveries = [
    { name: 'Alo', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/alo.jpg', url: 'https://wa.me/message/RAM5DY4A4KTYJ1' },
    { name: 'Beefly', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/beefly.jpg', url: 'https://beefly.app/' },
    { name: 'Detodito', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/detodito.jpg', url: 'https://uqr.to/gdsm' },
    { name: 'Ecobike', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/ecobike.jpg', url: 'https://wa.me/584248399970' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/guick.jpg', url: 'https://www.guick.com/' },
    { name: 'Kepido', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/kepido.jpg', url: 'https://onelink.to/kp9bn7' },
    { name: "Pa'llevar", description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/pallevar.jpg', url: 'https://comida.pidepallevar.com/es' },
    { name: 'Rela', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/rela.jpg', url: 'https://wa.me/584147782469' },
    { name: "Ubiigo", description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/ubiigo.jpg', url: 'https://ubiigo.co/app/link' },
    { name: "Valencia Delivery", description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/valencia.jpg', url: 'https://www.deliveryvalencia.com' },
    { name: 'Yolopio', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/yolopido.jpg', url: 'https://yolopido.com' },
    { name: 'Yummy', description: 'Una descripcion pava del delivey jeje', image: 'https://haptico-back.herokuapp.com/images/yummy.jpg', url: 'https://pideyummy.com' }
]


function LoadFonts({ fonts }) {

    const filterFonts = fonts.filter(font => font !== undefined);
    if (filterFonts.length === 0) return <div></div>

    const fontsToLoad = filterFonts.map(font => {
        return {
            font: font,
            weights: [400, '500', '600', '700'],
        }
    })

    return (
        <GoogleFontLoader
            fonts={fontsToLoad}
        />
    )
}


function Main({ colorSpin = '#097392' }) {
    const LoadingComponent = <LoadingMenu color={colorSpin} />;
    const [styles, setStyles] = useState({});
    const [loading, setLoading] = useState(true);
    const { path, url } = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchStyles = async () => {
            return await (await fetch(API_URL + `menu/${id}/styles`)).json();
        }
        const loadStyles = async () => {
            const response = await fetchStyles();
            setLoading(false)
            setStyles(response.styles)
        }

        loadStyles()

        return () => {

        }
    }, [id])


    const {
        categoryCardStyle,
        categoryContainerStyle,
        contactStyle,
        deliveryCardStyle,
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
        hasDelivery,
        categoryHeadingStyle,
        categoryInnerContainer,
        categoryCardProdutcDescriptionStyle,
        categoryCardProdutcTitleStyle,
        sectionHeadingStyle
    } = styles
    // background: `url(${process.env.PUBLIC_URL}/images/bg.jpg)` }
    return (
        loading ? LoadingComponent :
            <div className='flex flex-1 flex-col' style={{ fontFamily: menuFontFamily }}>
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
                            cardTitleStyle={categoryCardProdutcTitleStyle}
                            cardDescriptionStyle={categoryCardProdutcDescriptionStyle}
                            style={menuStyle}
                            showCategoriesAs={showCategoriesMenuAs}
                            showDishAs={showDishAs}
                            image={imageLogo}
                            title={name}
                            stickButtonsMenu={stickButtonsMenu}
                            loading={loading}
                            loadingComponent={LoadingComponent}
                        />
                    </Route>
                    <Route path={`${path}/contact`}>
                        <ContactUs
                            titleStyle={sectionHeadingStyle}
                            imagesToShow={images}
                            socialLinks={socialLinks}
                            workingDays={workingDays}
                            containerStyle={contactStyle}
                            loadingComponent={LoadingComponent}
                        />
                    </Route>
                    <Route path={`${path}/payments`}>
                        <PaymentMethods
                            titleStyle={sectionHeadingStyle}
                            paymentsMethods={paymentMethods}
                            cardContainerStyle={paymentCardStyle}
                            dollarRateStyle={dollarRateStyle}
                            loadingComponent={LoadingComponent}
                        />
                    </Route>
                    <Route path={`${path}/delivery`}>
                        <Delivery
                            titleStyle={sectionHeadingStyle}
                            deliveryCardStyle={deliveryCardStyle}
                            deliveries={deliveries}
                            loadingComponent={LoadingComponent}
                        />
                    </Route>
                    <Redirect from='*' to={url}></Redirect>
                </Switch>
                <MenuBottomBrand image={imageLogo} title={name} style={{}} />
                <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={navItemStyle} hasDelivery={hasDelivery} />
            </div>
    );
}

export default withRouter(Main);