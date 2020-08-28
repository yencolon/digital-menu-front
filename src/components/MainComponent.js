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

//mockup data.
const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'twitter', identification: 'eltaco', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'instagram', identification: '@eltaco', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'whatsapp', identification: '+58 412 499 92 92', url: '' },
    { network: 'telegram', identification: '@eltaco', url: 'https://t.me/alvaroomar' },
]

const workingDays = [
    { day: 'Miercoles', startTime: '7:00 PM', endTime: '3:00 AM' }, { day: 'Jueves', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Viernes', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Sábado', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Domingo', startTime: '7:00 PM', endTime: '3:00 AM' },
]

const paymentMethods = [
    { name: 'Zelle', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: ' ', image: 'https://www.enorthfield.com/media/1820/news_zelle.png?anchor=center&mode=crop&width=836&height=457&rnd=132108719400000000' },
    { name: 'Banesco', identification: '013465566656656565', owner: 'Alvaro Martinez', extrainfo: '20192758', image: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200/https://todobancosvenezuela.com/wp-content/uploads/2020/03/banco-banesco.jpg' },
    { name: 'BBVA Provincial', identification: '01154699797945454', owner: 'Alvaro Martinez', extrainfo: '20192758', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BBVAprovinciallogo.svg/1200px-BBVAprovinciallogo.svg.png' },
    { name: 'Uphold', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4sJALNNoRLSmoJiyCVSm4fLdy-qFcHbif0w&usqp=CAU' },
    { name: 'Paypal', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://programacion.net/files/article/20160811100804_paypal.png' },
    { name: 'Airtm', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://cambiasaldo.com/gana-dinero-por-internet/wp-content/uploads/2019/05/airtm-logo-1024x456.png' }
]


const deliveries = [
    { name: 'Alo', description: 'Una descripcion pava del delivey jeje', image: 'alo.jpg', url: 'https://www.guick.com/' },
    { name: 'Beefly', description: 'Una descripcion pava del delivey jeje', image: 'beefly.jpg', url: 'https://beefly.app/' },
    { name: 'Detodito', description: 'Una descripcion pava del delivey jeje', image: 'detodito.jpg', url: 'https://www.detodito.net/' },
    { name: 'Ecobike', description: 'Una descripcion pava del delivey jeje', image: 'ecobike.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'guick.jpg' },
    { name: 'Rela', description: 'Una descripcion pava del delivey jeje', image: 'rela.jpg' },
    { name: 'Kepido', description: 'Una descripcion pava del delivey jeje', image: 'kepido.jpg' },
    { name: "Pa'llevar", description: 'Una descripcion pava del delivey jeje', image: 'pallevar.jpg' },
    { name: "Ubiigo", description: 'Una descripcion pava del delivey jeje', image: 'ubiigo.jpg' }
]


function LoadFonts({ fonts }) {

    const filterFonts = fonts.filter(font => font !== undefined);
    if (filterFonts.length === 0) return <div></div>

    const fontsToLoad = filterFonts.map(font => {
        return {
            font: font,
            weights: [400, '700'],
        }
    })

    return (
        <GoogleFontLoader
            fonts={fontsToLoad}
        />
    )
}

function Main() {
    const [styles, setStyles] = useState({});
    const { path, url } = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchStyles = async () => {
            return await (await fetch(API_URL + 'styles?storeId=' + id)).json();
        }
        const loadStyles = async () => {
            const styles = await fetchStyles();
            setStyles(styles[0])
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
        categoryCardProdutcTitleStyle
    } = styles

    return (
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
                    />
                </Route>
                <Route path={`${path}/contact`}>
                    <ContactUs
                        image={imageLogo}
                        title={name}
                        socialLinks={socialLinks}
                        workingDays={workingDays}
                        containerStyle={contactStyle}
                    />
                </Route>
                <Route path={`${path}/payments`}>
                    <PaymentMethods
                        paymentsMethods={paymentMethods}
                        cardContainerStyle={paymentCardStyle}
                        dollarRateStyle={dollarRateStyle}
                    />
                </Route>
                <Route path={`${path}/delivery`}>
                    <Delivery
                        deliveryCardStyle={deliveryCardStyle}
                        deliveries={deliveries}
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