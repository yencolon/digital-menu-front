import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from 'components/MainComponent';
import './App.css'
import MenuListComponent from 'components/MenuListComponent';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/menu/:id">
            <Main />
          </Route>
          <Route  path="/customers">
            <MenuListComponent />
          </Route>
          <Redirect from="/" to="/menu/1" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default (App);
