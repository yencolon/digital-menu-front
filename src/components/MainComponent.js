import React from 'react';
import { BrowserRouter, Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';
import GoogleFontLoader from 'react-google-font-loader';

//color
const primaryColor = '#F2AF29';
const accentColor = '#AD343E';

//assets
const name = 'el taco.';
const imageLogo = 'https://images-platform.99static.com/nxHkdscdUjRrDASmZ017Vf88lqc=/90x85:903x898/600x600/99designs-contests-attachments/106/106029/attachment_106029108';
const dollarRate = '268.000,00';
//fonts
const titleFontFamily = 'Oleo Script';
const mainFontFamily = 'Roboto';
const menuFontFamily = 'Amatic SC';

//styles
const navBarContainerStyle = { 'background-color': primaryColor, 'font-family': mainFontFamily }
const navTitleStyle = { color: 'white', 'font-weight': '700', 'font-family': titleFontFamily }
const navItemStyle = { color: 'white' }
const categoryButtonStyle = { 'background-color': '#F2AF29', color: 'white', 'font-family': mainFontFamily }
const categoryContainerStyle = { 'font-family': menuFontFamily }
const categoryCardStyle = { border: 'solid 1px ' + accentColor }
const paymentCardStyle = { border: 'solid 1px ' + accentColor }
const containerStyle = { border: 'solid 1px ' + accentColor }
const dollarRateStyle = { 'background-color':  accentColor}

//mockup data
const socialLinks = [
    { network: 'facebook', identification: 'El taco facebook', url: 'www.taco.com' },
    { network: 'instagram', identification: '@eltaco', url: 'www.taco.com' },
    { network: 'whatsapp', identification: '+58 412 499 92 92', url: 'www.taco.com' }
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

function Main() {
    return (
        <div className='flex flex-1 flex-col'>
            <GoogleFontLoader
                fonts={[
                    {
                        font: menuFontFamily,
                        weights: [400, '700'],
                    },
                    {

                        font: mainFontFamily,
                        weights: [400, '700'],
                    },
                    {
                        font: titleFontFamily,
                        weights: [400, '700']
                    }
                ]}
            />
            <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle} image={null} title={name} />
            <Switch>
                <Route exact path='/menu' component={() =>
                    <Menu
                        categoryButtonBackground={primaryColor}
                        categoryButtonTextColor='white'
                        categoryButtonStyle={categoryButtonStyle}
                        categoryContainerStyle={categoryContainerStyle}
                        categoryCardStyle={categoryCardStyle}
                        showCategoriesAs='tabs'
                        showDishAs='card'
                        image={imageLogo}
                        title={name}
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
                <Route path='/delivery' component={Delivery} />
                <Redirect from='/' to='/menu'></Redirect>
            </Switch>
            <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={navItemStyle} />
        </div>
    );
}

export default withRouter(Main);