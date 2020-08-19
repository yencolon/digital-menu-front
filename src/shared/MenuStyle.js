
import logo from '../assets/images/logo.png'
//color
export const primaryColor = '#F2AF29';
export const secondaryColor = '#DB3A34';
export const accentColor = '#AD343E';

//assets
export const showCategoriesMenuAs = 'buttons';
export const showDishAs = 'text';
export const stickButtonsMenu = false;
export const name = 'el taco.';
export const imageLogo = logo;
export const hasDelivery = true;
//fonts
export const titleFontFamily = 'Oleo Script';
export const mainFontFamily = 'Anaheim';
export const menuFontFamily = 'Anaheim';
export const menuTitleFontFamily = 'Anaheim'
//styles
//Navigation bar 
export const navBarContainerStyle = { backgroundColor: primaryColor, fontFamily: mainFontFamily, fontSize: '1.4em' }
export const navTitleStyle = { color: 'white', 'font-weight': '700', fontFamily: titleFontFamily }
//Navigation bar bottom
export const navItemStyle = { color: 'white' }
//Menu
//Menu -> buttons top
export const categoryButtonBackground = 'transparent';
export const categoryButtonSelectedStyle = { backgroundColor: 'transparent', color: accentColor, borderBottom: '2px dotted ' + accentColor, borderTop: '2px dotted ' + accentColor, fontFamily: mainFontFamily }
export const categoryButtonStyle = { backgroundColor: 'transparent', color: primaryColor, borderBottom: '2px dotted ' + primaryColor, borderTop: '2px dotted ' + primaryColor, fontFamily: mainFontFamily }
//Menu category container 
export const menuStyle = {} //1
export const menuContainerStyle = { fontFamily: menuTitleFontFamily, color: accentColor, textAlign: 'left' } // 2
export const categoryContainerStyle = { borderLeft: '2px dotted ' + accentColor, boxShadow: '0px 0px 0px 0px' } //3
export const categoryCardStyle = { fontFamily: menuFontFamily, color: 'black' } //4

export const paymentCardStyle = { fontFamily: menuFontFamily }
export const contactStyle = { fontFamily: menuFontFamily }
export const dollarRateStyle = { backgroundColor: accentColor }
export const deliveryCardStyle = { fontFamily: menuFontFamily };
