import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
//CREATE A CLASS FIELD THAT HOLDS ALL JSS CLASSES
const styles = {
  literals: {
    showDishAs: 'text',
    showCategoryButtonsAs: 'buttons',
  },
  colors: {
    primaryColor: '#212121',
    secondaryColor: '#D51E19',
    backgroundColor: '#f5f5f5',
    categoryButtonBackground: '#f5f5f5',
  },
  booleans: {
    stickNavBar: false,
    stickButtonsMenu: true,
    showInitialPicker: false,
    hasDelivery: true,
    hasBanner: false,
    showNavTopIcons: false,
    carouselOnContacts: true,
    bannerOnDelivery: true,
    bannerOnMenu: false,
    showEmailOnContacts: false,
  },
  fonts: ['Alatsi', 'Monserrat', 'Lato'],
  navTop: {
    navBarContainerStyle: {
      backgroundColor: '#000000',
      fontFamily: 'Monserrat',
      fontSize: '1.4em',
    },
    navTitleStyle: {
      color: 'white',
      fontWeight: '700',
      fontFamily: 'Oleo Script',
    },
    navItemStyle: {
      color: 'white',
    },
  },
  navBottom: {
    navBarContainerStyle: {
      backgroundColor: '#000000',
      fontFamily: 'Alatsi',
      fontSize: '1.4em',
    },
    navItemStyle: {
      color: 'white',
    },
  },
  menu: {
    menuStyle: {},
    menuContainerStyle: {
      textAlign: 'center',
    },
    buttons: {
      categoryButtonSelectedStyle: {
        backgroundColor: 'transparent',
        color: '#D51E19',
        border: '2px solid #212121',
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: '15px',
        marginLeft: '10px',
        marginRight: '10px',
      },
      categoryButtonStyle: {
        backgroundColor: 'transparent',
        color: '#212121',
        border: '2px solid #212121',
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: '15px',
        marginLeft: '10px',
        marginRight: '10px',
      },
    },
  },
  category: {
    subCategoryContainerStyle: {
      borderBottom: '2px solid #212121',
      boxShadow: '0px 0px 0px 0px',
      paddingBottom: '30px',
    },
    subCategoryHeadingStyle: {
      lineHeight: 1,
      fontFamily: 'Alatsi',
      color: '#212121',
      textAlign: 'left',
      fontSize: '27.5px',
      textTransform: 'uppercase',
    },
    subCategoryInnerContainer: {
      // borderTop: '2px solid #212121',
      // boxShadow: '0px 0px 0px 0px'
    },
  },
  product: {
    productContainerStyle: {
      lineHeight: 1.3,
      color: 'rgba(0,0,0,1)',
      alignItems: 'center',
    },
    productContainerHighLightStyle: {
      border: '1px solid #212121',
    },
    productTitleStyle: {
      fontFamily: 'Lato',
      textAlign: 'left',
      fontSize: '20px',
    },
    productDescriptionStyle: {
      fontFamily: 'Lato',
      textAlign: 'left',
      fontSize: '16px',
    },
    priceDescriptionStyle: {
      fontFamily: 'Lato',
      textAlign: 'left',
      fontSize: '14px',
    },
  },
  common: {
    pageHeadingStyle: {
      lineHeight: 1,
      fontFamily: 'Alatsi',
      color: '#212121',
      fontSize: '2em',
      borderBottom: '1.5px solid #212121',
      marginLeft: '30px',
      marginRight: '30px',
      paddingTop: '10px',
    },
    bottomBrandStyle: {
      backgroundColor: '#000000',
      color: '#fffff',
    },
    bottomBrandTextInfoStyle: {
      color: '#ffffff',
      fontFamily: 'Monserrat',
    },
  },
  picker: {
    pickerContainer: {},
    navBarContainerStyle: {
      backgroundColor: '#000000',
    },
    buttonsContainer: {},
    buttons: {
      backgroundColor: 'transparent',
      color: '#D51E19',
      border: '2px solid #F5F5F5',
      fontFamily: 'Lato',
      fontWeight: '300',
      fontSize: '15px',
      marginLeft: '10px',
      marginRight: '10px',
    },
  },
  payments: {
    paymentCardStyle: {
      fontFamily: 'Lato',
    },
    dollarRateStyle: {
      color: 'black',
      fontWeight: 'bold',
    },
  },
  contacts: {
    contactStyle: {
      fontFamily: 'Lato',
    },
  },
  delivery: {
    deliveryCardStyle: {
      fontFamily: 'Lato',
      border: '0px solid black',
    },
  },
  assets: {
    logo: 'http://127.0.0.1:8000/images/2/madero_logo.png',
    icon: 'http://127.0.0.1:8000/images/2/madero_icon.png',
    homePageLogo: 'http://127.0.0.1:8000/images/2/madero_home_page_logo.png',
    carouselImages: [],
    advertisementImages: [],
    banner: 'https://api.haptico.digital/images/2/banner.png',
  },
};

const ThemeStateContext = React.createContext({ ...styles });

const ThemeDispatchContext = React.createContext({
  setTheme: (theme) => {},
  resetTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [context, setContext] = useState({ ...styles });

  const themeContextUpdater = {
    setTheme: useCallback((theme) => setContext({ ...theme }), []),
    resetTheme: () => setContext({}),
  };

  return (
    <ThemeStateContext.Provider value={context}>
      <ThemeDispatchContext.Provider value={themeContextUpdater}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

const useThemeState = () => {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
};

const useThemeDispatch = () => {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useThemeState, useThemeDispatch };
