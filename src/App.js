import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Wrapper from 'views/Wrapper';
import { ThemeProvider } from 'context/MenuThemeContext';
import { CurrentRestauratInfoProvider } from 'context/CurrentRestaurantContext';
import Landing from 'views/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/">
          <Landing />
        </Route>
        <Route path="/:routeName">
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

export default App;
