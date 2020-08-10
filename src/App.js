import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from 'components/MainComponent';
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleFontLoader
        fonts={[
          {
            font: 'Amatic SC',
            weights: [400, '700'],
          },
          {

            font: 'Oleo Script',
            weights: [400, '700'],
          }
        ]}
      />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default (App);
