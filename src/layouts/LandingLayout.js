import * as React from 'react';
import PropTypes from 'prop-types';
import MenuHeader from 'components/common/MenuHeader';
import MenuNavigation from 'components/common/MenuNavigation';
import MenuBottomBrand from 'components/common/MenuBottomBrand';
import { useThemeState } from 'context/MenuThemeContext';

const LandingLayout = ({ children }) => {
    const theme = useThemeState();
    return (
        null
        // <div className='flex flex-col justify-between h-full' style={{ backgroundColor: theme.colors.backgroundColor }}>
        //     <Nav />
        //     <main>
        //         {children}
        //     </main>
        //     <MenuBottomBrand />
        //     <MenuNavigation containerStyle={theme.navBottom.navBarContainerStyle} itemStyle={theme.navBottom.navItemStyle} hasDelivery={theme.booleans.hasDelivery} />
        // </div>
    );
};

LandingLayout.propTypes = {
    children: PropTypes.element
};

export default LandingLayout;
