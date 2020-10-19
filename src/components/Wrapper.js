import { useThemeDispatch, useThemeState } from 'context/MenuThemeContext';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from 'shared/apiUrl';
import Main from './Main';
import LoadingMenu from './common/LoadingComponent';
import { Helmet } from 'react-helmet';
import { useCurrentRestaurantDispatch, useCurrentRestaurantState } from 'context/CurrentRestaurantContext';

const Wrapper = () => {
    // const TabsLoadingComponent = <LoadingMenu color={colorSpin} image={logo} />;
    const [locations, setLocations] = useState([]);
    const [manifestUrl, setManifestUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const { routeName } = useParams();
    const { setTheme } = useThemeDispatch();
    const { setInfo } = useCurrentRestaurantDispatch();
    const info = useCurrentRestaurantState();
    const theme = useThemeState();
    const history = useHistory();

    useEffect(() => {
        const loadStyles = async () => {
            const response = await fetch(API_URL + `api/restaurants/${routeName}`).then(response => {
                return response.ok ? response.json() : 'err';
            });
            if (response !== 'err') {
                const restaurant = response.restaurant;
                ReactDOM.unstable_batchedUpdates(() => {
                    const blob = new Blob([JSON.stringify(restaurant.manifest)], { type: 'application/json' });
                    setLoading(false);
                    setLocations(restaurant.locations);
                    setManifestUrl(URL.createObjectURL(blob));
                    setInfo({
                        name: restaurant.name,
                        description: restaurant.description,
                        workingDays: restaurant.workingDays,
                        manifest: restaurant.manifest,
                        contacts: restaurant.contacts,
                        deliveries: restaurant.deliveries,
                        payments: restaurant.paymentMehtods,
                        location: { ...restaurant.locations[0] }
                    });
                    setTheme({ ...restaurant.locations[0].menus[0].styles });
                });
            } else {
                history.push('/');
            }
        };

        loadStyles();

        return () => {

        };
    }, [routeName, history, setTheme, setInfo]);
    // Muchos RENDERS FIX
    return (
        <>
            <Helmet>
                <link rel="manifest" href={manifestUrl} />
                <link rel="icon" href={theme.assets.homePageLogo} />
                <title>{info.name}</title>
            </Helmet>
            { loading
                ? <LoadingMenu color={theme.colors.primaryColor} image={theme.assets.logo} showImage={true} />
                : <Main colorSpin='#F2AF29' logo={API_URL + 'images/logo.png'} locations={locations} />}
        </>

    );
};

export default Wrapper;
