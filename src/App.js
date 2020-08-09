import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';

const navBarContainerStyle = { 'background-color': '#F2AF29' }
const navTitleStyle = { color: 'white', 'font-weight': '400' }
const itemStyle = { color: 'white' }
const categoryButtonStyle = { 'background-color': '#F2AF29', color: 'white' }
const imageLogo = 'https://images-platform.99static.com/nxHkdscdUjRrDASmZ017Vf88lqc=/90x85:903x898/600x600/99designs-contests-attachments/106/106029/attachment_106029108';
const categoryContainerStyle = { 'border': '1px solid #AD343E' }

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle} image={null} title="el taco." />
        <Route exact path='/' component={() =>
          <Menu
            categoryButtonBackground='white'
            categoryButtonTextColor='white'
            categoryContainerStyle={categoryContainerStyle}
            categoryButtonStyle={categoryButtonStyle}
            image={imageLogo}
            showCategoriesAs='buttons'
            showDishAs='card'
            title='el taco.'
          />}
        />
        <Route path='/contact' component={ContactUs} />
        <Route path='/payments' component={PaymentMethods} />
        <Route path='/delivery' component={Delivery} />
      
        <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={itemStyle} />
      </BrowserRouter>
    </div>
  );
}

export default (App);
