import React from 'react';
import './App.scss';
import Menu from 'components/Menu/MenuComponent';
import MenuFooter from 'components/Menu/MenuFooterComponent';
import MenuHeader from 'components/Menu/MenuHeaderComponent';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <Menu />
      <MenuFooter />
    </div>
  );
}

export default App;
