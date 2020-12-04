import * as React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Menu from 'views/Menu';
import ContactUs from 'views/Contact';
import Delivery from 'views/Delivery';
import PaymentMethods from 'views/PaymentMethods';

const MenuRoutes = ({ path, url, menuToShow, defaultCategorySelectedId }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Menu
          menu={menuToShow}
          defaultCategorySelectedId={defaultCategorySelectedId}
        />
      </Route>
      <Route exact path={`${path}/contact`}>
        <ContactUs />
      </Route>
      <Route exact path={`${path}/payments`}>
        <PaymentMethods />
      </Route>
      <Route path={`${path}/delivery`}>
        <Delivery />
      </Route>
      <Redirect from="*" to={`${url}`}></Redirect>
    </Switch>
  );
};

MenuRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  menuToShow: PropTypes.object,
  defaultCategorySelectedId: PropTypes.number,
};

export default MenuRoutes;
