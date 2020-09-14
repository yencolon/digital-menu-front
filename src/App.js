import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from 'components/MainComponent';
import './App.css';
import MenuListComponent from 'components/MenuListComponent';
import { API_URL } from 'shared/apiUrl';

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/menu/:id" >
                    <Main colorSpin='#F2AF29' logo={API_URL + 'images/logo.png'} />
                </Route>
                <Route path="/customers">
                    <MenuListComponent />
                </Route>
                <Redirect from="/" to="/menu/1" />
            </Switch>
        </BrowserRouter>
    );
}

export default (App);
