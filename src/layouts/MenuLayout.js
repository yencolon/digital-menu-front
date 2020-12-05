import * as React from 'react';
import PropTypes from 'prop-types';
import MenuHeader from 'components/common/MenuHeader';
import MenuNavigation from 'components/common/MenuNavigation';
import MenuBottomBrand from 'components/common/MenuBottomBrand';
import { useThemeState } from 'context/MenuThemeContext';

const MenuLayout = ({ children }) => {
  const theme = useThemeState();
  return (
    <div style={{ backgroundColor: theme.colors.backgroundColor }}>
      <MenuHeader />
      <main>{children}</main>
      <MenuBottomBrand />
      <MenuNavigation
        containerStyle={theme.navBottom.navBarContainerStyle}
        itemStyle={theme.navBottom.navItemStyle}
        hasDelivery={theme.booleans.hasDelivery}
      />
    </div>
  );
};

MenuLayout.propTypes = {
  children: PropTypes.element,
};

export default MenuLayout;
