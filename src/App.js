import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/MenuHeaderComponent';
import MenuNavigation from 'components/MenuNavigationComponent';
import ContactUs from 'components/ContactUsComponent';
import PaymentMethods from 'components/PaymentMethods';
import Delivery from 'components/DeliveryComponent';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <BrowserRouter>
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/payments' component={PaymentMethods} />
        <Route path='/delivery' component={Delivery} />
        <Redirect to="/menu" />
      </BrowserRouter>
      <MenuNavigation />
    </div>
  );
}

export default App;
