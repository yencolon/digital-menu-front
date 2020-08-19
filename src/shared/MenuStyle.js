
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
export const navBarContainerStyle = { 'background-color': primaryColor, 'font-family': mainFontFamily , 'font-size': '1.4em'}
export const navTitleStyle = { color: 'white', 'font-weight': '700', 'font-family': titleFontFamily }
//Navigation bar bottom
export const navItemStyle = { color: 'white' }
//Menu
//Menu -> buttons top
export const categoryButtonBackground = 'transparent';
export const categoryButtonSelectedStyle = { 'background-color': 'transparent', color: accentColor, 'border-bottom': '2px dotted ' + accentColor, 'border-top': '2px dotted ' + accentColor, 'font-family': mainFontFamily }
export const categoryButtonStyle = { 'background-color': 'transparent', color: primaryColor, 'border-bottom': '2px dotted ' + primaryColor,  'border-top': '2px dotted ' + primaryColor, 'font-family': mainFontFamily }
//Menu category container 
export const menuStyle = {} //1
export const menuContainerStyle = {'font-family': menuTitleFontFamily, color: accentColor , 'text-align': 'left'} // 2
export const categoryContainerStyle = { 'border-left': '2px dotted ' + accentColor , 'box-shadow': '0px 0px 0px 0px'} //3
export const categoryCardStyle = {'font-family': menuFontFamily, color: 'black' } //4

export const paymentCardStyle = { 'font-family': menuFontFamily }
export const contacStyle = { 'font-family': menuFontFamily }
export const dollarRateStyle = { 'background-color': accentColor }
export const deliveryCardStyle = { 'font-family': menuFontFamily };
