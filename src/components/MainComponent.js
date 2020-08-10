import React from 'react';
import { BrowserRouter, Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';

const primaryColor = '#F2AF29';
const accentColor = '#AD343E';

const navBarContainerStyle = { 'background-color': primaryColor, 'font-family': 'Oleo Script' }
const navTitleStyle = { color: 'white', 'font-weight': '700', 'font-family': 'Oleo Script' }
const itemStyle = { color: 'white' }
const categoryButtonStyle = { 'background-color': '#F2AF29', color: 'white', 'font-family': 'Oleo Script' }
const imageLogo = 'https://images-platform.99static.com/nxHkdscdUjRrDASmZ017Vf88lqc=/90x85:903x898/600x600/99designs-contests-attachments/106/106029/attachment_106029108';
const categoryContainerStyle = { 'font-family': 'Amatic SC' }
const categoryCardStyle = { border: 'solid 1px ' + accentColor }

function Main() {
    return (
        <div>
            <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle} image={null} title="el taco." />
            <Switch>
                <Route exact path='/menu' component={() =>
                    <Menu
                        categoryButtonBackground='white'
                        categoryButtonTextColor='white'
                        categoryContainerStyle={categoryContainerStyle}
                        categoryCardStyle={categoryCardStyle}
                        categoryButtonStyle={categoryButtonStyle}
                        image={imageLogo}
                        showCategoriesAs='tabs'
                        showDishAs='card'
                        title='el taco.'
                    />}
                />
                <Route path='/contact' component={ContactUs} />
                <Route path='/payments' component={PaymentMethods} />
                <Route path='/delivery' component={Delivery} />
                <Redirect from='/' to='/menu'></Redirect>
            </Switch>
            <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={itemStyle} />
        </div>
    );
}

export default withRouter(Main);