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
    accentColor, categoryCardStyle, categoryContainerStyle, containerStyle,
    deliveryCardStyle, imageLogo, mainFontFamily, menuFontFamily, navTitleStyle,
    categoryButtonBackground, paymentCardStyle, primaryColor, titleFontFamily, categoryButtonStyle, dollarRateStyle,
    menuStyle, menuContainerStyle, showCategoriesMenuAs, showDishAs, name, navBarContainerStyle, navItemStyle, stickButtonsMenu, categoryButtonSelectedStyle
} from '../shared/MenuStyle';


//mockup data.
const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: 'https://www.instagram.com/alvaroomarfoto/' },
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
    { name: 'Zelle', identification: 'alavaroomar@gmail.com', owner: 'Alvaro Martinez', extrainfo: '' },
    { name: 'Banco Banesco', identification: '013465566656656565', owner: 'Alvaro Martinez', extrainfo: '12454545' },
    { name: 'Provincial', identification: '01154699797945454', owner: 'Alvaro Martinez', extrainfo: '12454554' }
]

const deliveries = [
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' },
    { name: 'Guick', description: 'Una descripcion pava del delivey jeje', image: 'https://pbs.twimg.com/profile_images/1260682517876801543/tvRDeiLL_400x400.jpg' }
]


async function getDollarRate() {
    try {
        const response = await (await fetch('https://api.yadio.io/json')).json();
        return response.USD.VND;
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
        <div className='flex flex-1 flex-col'>
            <GoogleFontLoader
                fonts={[
                    {
                        font: menuFontFamily,
                        weights: ['400', '800'],
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
                    }
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
                        categoryContainerStyle={categoryContainerStyle}
                        categoryCardStyle={categoryCardStyle}
                        menuContainerStyle={menuContainerStyle}
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
                        containerStyle={containerStyle}
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
            <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={navItemStyle} />
        </div>
    );
}

export default withRouter(Main);