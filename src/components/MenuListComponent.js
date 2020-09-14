import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'shared/apiUrl';

function Card ({ store }) {
    const imageLogo = store.styles.length > 0 ? store.styles[0].imageLogo : 'logo.png';
    return (
        <div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img src={imageLogo} alt={store.name} />
            </div>
            <p className='text-2xl font-bold '>{store.name}</p>
        </div>

    );
}

Card.propTypes = {
    store: PropTypes.object
};

function StoreListCards ({ storeList }) {
    const storeToRender = storeList.filter(store => store !== undefined);
    return (
        storeToRender.map(store => {
            return <Card store={store} key={store.id} />;
        })
    );
}

StoreListCards.propTypes = {
    storeList: PropTypes.array
};

function MenuListComponent () {
    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setStoreList(await (await fetch(API_URL + 'stores?_embed=styles')).json());
            } catch (e) {}
        };
        fetchMenu();
        return () => {

        };
    }, []);

    return (
        <div className='flex flex-col h-screen justify-between' style={{ fontFamily: 'Avenir next' }}>
            <nav className="flex items-center justify-between flex-wrap p-6" style={{ backgroundColor: '#097392' }}>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                    <span className="font-semibold text-xl tracking-tight" style={{ color: '#FFFEF5' }}>Háptico</span>
                </div>
            </nav>

            <div>
                <p>Háptico, menus digitales</p>
            </div>
            <div className='flex flex-row justify-around'>
                <StoreListCards storeList={storeList} />
            </div>

            <div className='flex flex-col full-w p-10' style={{ backgroundColor: '#383838' }}>
                <div className='divide-y-2 divide-white'>
                    <div>FOO</div>
                    {/* <p className='text-4xl text-left'>Háptico</p> */}
                    <p className='text-4xl text-left'>Háptico</p>
                </div>
            </div>
        </div>
    );
}

export default MenuListComponent;
