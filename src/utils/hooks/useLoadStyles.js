import ReactDOM from 'react-dom';
import { useCurrentRestaurantDispatch } from 'context/CurrentRestaurantContext';
import { useThemeDispatch } from 'context/MenuThemeContext';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from 'shared/apiUrl';

const useLoadStyles = () => {
    const [loading, setLoading] = useState(true);
    const { routeName } = useParams();
    const { setTheme } = useThemeDispatch();
    const { setInfo } = useCurrentRestaurantDispatch();
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
                    setInfo({
                        name: restaurant.name,
                        description: restaurant.description,
                        workingDays: restaurant.workingDays,
                        manifest: restaurant.manifest,
                        manifestUrl: URL.createObjectURL(blob),
                        contacts: restaurant.contacts,
                        deliveries: restaurant.deliveries,
                        payments: restaurant.paymentMehtods,
                        location: restaurant.location,
                        menu: restaurant.menu
                    });
                    setTheme({ ...restaurant.styles });
                });
            } else {
                history.push('/');
            }
        };

        loadStyles();

        return () => {
        };
    }, [routeName, history, setTheme, setInfo, loading]);

    return loading;
};

export default useLoadStyles;
