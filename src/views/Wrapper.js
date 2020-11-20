import React from 'react';
import { API_URL } from 'shared/apiUrl';
import { Helmet } from 'react-helmet';
import { useLoadStyles } from 'utils/hooks';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';
import Main from './Main';
import LoadingMenu from 'components/common/LoadingComponent';
import LoadFonts from '../utils/LoadFontsComponent';

const Wrapper = () => {
    const loadingStyles = useLoadStyles();
    const info = useCurrentRestaurantState();
    const theme = useThemeState();
    return (
        <>
            <Helmet>
                <link rel="manifest" href={info.manifestUrl} />
                <link rel="icon" href={theme.assets.homePageLogo} />
                <title>{info.name}</title>
            </Helmet>
            { loadingStyles
                ? <LoadingMenu color={theme.colors.primaryColor} image={theme.assets.logo} showImage={true} />
                : <div>
                    <LoadFonts fonts={theme.fonts} />
                    <Main colorSpin='#F2AF29' logo={API_URL + 'images/logo.png'} menu={info.menu} />
                </div>
            }
        </>

    );
};

export default Wrapper;
