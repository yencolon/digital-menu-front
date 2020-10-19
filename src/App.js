import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MenuListComponent from 'components/MenuList';
import Wrapper from 'components/Wrapper';
import { ThemeProvider } from 'context/MenuThemeContext';
import { CurrentRestauratInfoProvider } from 'context/CurrentRestaurantContext';

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact strict path="/">
                    <MenuListComponent />
                </Route>
                <Route path="/:routeName" >
                    <ThemeProvider>
                        <CurrentRestauratInfoProvider>
                            <Wrapper />
                        </CurrentRestauratInfoProvider>
                    </ThemeProvider>
                </Route>
                <Redirect from="*" to="/elpatronlecheria" />
            </Switch>
        </BrowserRouter>
    );
}

export default (App);
