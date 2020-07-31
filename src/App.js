import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';

const navBarContainerStyle = {'background-color': '#000'}
const navTitleStyle = { color: 'white' }
const itemStyle = {color: 'white'}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuHeader containerStyle={navBarContainerStyle} titleStyle={navTitleStyle}/>
      <BrowserRouter>
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/payments' component={PaymentMethods} />
        <Route path='/delivery' component={Delivery} />
        <Redirect to="/menu" />
      </BrowserRouter>
      <MenuNavigation containerStyle={navBarContainerStyle} itemStyle={itemStyle}/>
    </div>
  );
}

export default App;
