import React from 'react';
import './App.scss';
import Menu from 'components/Menu/MenuComponent';
import MenuHeader from 'components/Menu/MenuHeaderComponent';
import MenuNavigation from 'components/Menu/MenuNavigationComponent';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <Menu />
      <MenuNavigation />
    </div>
  );
}

export default App;
