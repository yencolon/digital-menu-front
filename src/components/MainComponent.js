import React, { useEffect, useState } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';
import GoogleFontLoader from 'react-google-font-loader';
import {
    categoryCardStyle, categoryContainerStyle, contactStyle,
    deliveryCardStyle, imageLogo, mainFontFamily, menuFontFamily, navTitleStyle,
    categoryButtonBackground, paymentCardStyle, titleFontFamily, categoryButtonStyle, dollarRateStyle,
    menuStyle, menuContainerStyle, showCategoriesMenuAs, showDishAs, name, navBarContainerStyle, navItemStyle, stickButtonsMenu, categoryButtonSelectedStyle, hasDelivery, categoryHeadingStyle, categoryInnerContainer, categoryCardProdutcDescriptionStyle,
    categoryCardProdutcTitleStyle
} from '../shared/MenuStyle';


//mockup data.
const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'twitter', identification: 'eltaco', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'instagram', identification: '@eltaco', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'whatsapp', identification: '+58 412 499 92 92', url: 'https://www.instagram.com/alvaroomarfoto/' },
    { network: 'telegram', identification: '@eltaco', url: 'https://www.instagram.com/alvaroomarfoto/' },
]

const workingDays = [
    { day: 'Miercoles', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Jueves', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Viernes', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Sábado', startTime: '7:00 PM', endTime: '3:00 AM' },
    { day: 'Domingo', startTime: '7:00 PM', endTime: '3:00 AM' },
]

const paymentMethods = [
    { name: 'Zelle', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: ' ', image: 'https://www.enorthfield.com/media/1820/news_zelle.png?anchor=center&mode=crop&width=836&height=457&rnd=132108719400000000' },
    { name: 'Banesco', identification: '013465566656656565', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1200/https://todobancosvenezuela.com/wp-content/uploads/2020/03/banco-banesco.jpg'},
    { name: 'BBVA Provincial', identification: '01154699797945454', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://elconcreto.com/wp-content/uploads/2017/08/ElConcreto-%C2%A1BBVA-Provincial-lleva-salud-y-bienestar-a-empleados-y-familiares-FOTO.jpg' },
    { name: 'Uphold', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4sJALNNoRLSmoJiyCVSm4fLdy-qFcHbif0w&usqp=CAU' },
    { name: 'Paypal', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://programacion.net/files/article/20160811100804_paypal.png' },
    { name: 'Airtm', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '', image: 'https://cambiasaldo.com/gana-dinero-por-internet/wp-content/uploads/2019/05/airtm-logo-1024x456.png' }
]

const deliveries = [
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Rela', description: 'Una descripcion pava del delivey jeje', image: 'https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/108375457_1370133229845097_7999732126284095069_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=54kDnGRgjkQAX8Fjkuq&oh=5f771124c5c10a8ed21c65ca6702c4f5&oe=5F63FCD7' },
    { name: 'Beefly', description: 'Una descripcion pava del delivey jeje', image: 'https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/81026982_521323728482028_8295797162642505728_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=Btto98IRtscAX_bUhVl&oh=7e3cbaa9fd62c6ba4f9170e937fa2765&oe=5F62FD70' },
    { name: 'Detodito', description: 'Una descripcion pava del delivey jeje', image: 'https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/94893925_235772637686246_7643865588611153920_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=dwu4IMILmQsAX_k5oW2&oh=7f024479f5408086f1c180467a72f121&oe=5F607BCBhttps://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/94893925_235772637686246_7643865588611153920_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=dwu4IMILmQsAX_k5oW2&oh=7f024479f5408086f1c180467a72f121&oe=5F607BCB' }
]


async function getDollarRate() {
    try {
        const response = await (await fetch('https://api.yadio.io/json')).json();
        return response.USD.rate;
    } catch (error) {
        console.log(error);
    }
}


function Main() {
    const [dollarRate, setDollarRate] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDollarRate();
            setDollarRate(result)
        };

        fetchData();
    })
    return (
        <div className='flex flex-1 flex-col' style={{fontFamily: menuFontFamily}}>
            <GoogleFontLoader
                fonts={[
                    {
                        font: menuFontFamily,
                        weights: ['100', '400', '800'],
                    },
                    {

                        font: mainFontFamily,
                        weights: [400, '700'],
                    },
                    {
                        font: titleFontFamily,
                        weights: [400, '700']
                    },
                    {
                        font: titleFontFamily,
                        weights: [400, '700']
                    },
                    {
                        font: menuFontFamily,
                        weights: ['100', '400', '800'],
                    },
                ]}
            />
            <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle} image={imageLogo} title={name} />
            <Switch>
                <Route exact path='/menu' component={() =>
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
                    />}
                />
                <Route path='/contact' component={() =>
                    <ContactUs
                        image={imageLogo}
                        title={name}
                        socialLinks={socialLinks}
                        workingDays={workingDays}
                        containerStyle={contactStyle}
                    />}
                />
                <Route path='/payments' component={() =>
                    <PaymentMethods
                        paymentsMethods={paymentMethods}
                        cardContainerStyle={paymentCardStyle}
                        dollarRate={dollarRate}
                        dollarRateStyle={dollarRateStyle}
                    />}
                />
                <Route path='/delivery' component={() =>
                    <Delivery
                        deliveryCardStyle={deliveryCardStyle}
                        deliveries={deliveries}
                    />}
                />
                <Redirect from='/' to='/menu'></Redirect>
            </Switch>
            <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={navItemStyle} hasDelivery={hasDelivery} />
        </div>
    );
}

export default withRouter(Main);