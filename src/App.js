import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from 'components/MainComponent';
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default (App);
