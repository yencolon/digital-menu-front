import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const info = {
    name: 'Madero Premium',
    description: '',
    location: {
        address: '',
        city: '',
        googleMapsUrl: ''
    },
    contacts: {
        instagram: '',
        whatsapp: '',
        telegram: '',
        phone: '',
        email: '',
        web: ''
    },
    payments: [

    ],
    deliveries: [

    ],
    workingDays: [
        {
            label: 'Todos los dias',
            from: '4:50 PM',
            to: '12:00 AM'
        }
    ],
    manifest: {
        short_name: 'Madero',
        name: 'Madero',
        icons: [
            {
                src: 'favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon'
            },
            {
                src: 'logo192.png',
                type: 'image/png',
                sizes: '192x192'
            },
            {
                src: 'logo512.png',
                type: 'image/png',
                sizes: '512x512'
            }
        ],
        start_url: '/madero',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff'
    }
};

const CurrentRestaurantInfoStateContext = React.createContext({ ...info });

const CurrentRestaurantInfoDispatchContext = React.createContext({
    setInfo: (info) => { },
    resetInfo: () => { }
});

const CurrentRestauratInfoProvider = ({ children }) => {
    const [context, setContext] = useState({ ...info });

    const currentRestaurantInfoContextUpdater = {
        setInfo: useCallback((info) => setContext({ ...info }), []),
        resetInfo: () => setContext({})
    };

    return (
        <CurrentRestaurantInfoStateContext.Provider value={context}>
            <CurrentRestaurantInfoDispatchContext.Provider value={currentRestaurantInfoContextUpdater}>
                {children}
            </CurrentRestaurantInfoDispatchContext.Provider>
        </CurrentRestaurantInfoStateContext.Provider>
    );
};

CurrentRestauratInfoProvider.propTypes = {
    children: PropTypes.element
};

const useCurrentRestaurantState = () => {
    const context = React.useContext(CurrentRestaurantInfoStateContext);
    if (context === undefined) {
        throw new Error('useCurrentRestaurantState must be used within a CurrentRestaurantStateProvider');
    }
    return context;
};

const useCurrentRestaurantDispatch = () => {
    const context = React.useContext(CurrentRestaurantInfoDispatchContext);
    if (context === undefined) {
        throw new Error('useCurrentRestaurantDispatch must be used within a CurrentRestaurantDispatchProvider');
    }
    return context;
};

export { CurrentRestauratInfoProvider, useCurrentRestaurantState, useCurrentRestaurantDispatch };
