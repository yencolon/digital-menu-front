import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'shared/apiUrl';
import LandingLayout from 'layouts/LandLayout';
function Card({ store }) {
  const imageLogo =
    store.styles.length > 0 ? store.styles[0].imageLogo : 'logo.png';
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={imageLogo} alt={store.name} />
      </div>
      <p className="text-2xl font-bold ">{store.name}</p>
    </div>
  );
}

Card.propTypes = {
  store: PropTypes.object,
};

function StoreListCards({ storeList }) {
  const storeToRender = storeList.filter((store) => store !== undefined);
  return storeToRender.map((store) => {
    return <Card store={store} key={store.id} />;
  });
}

StoreListCards.propTypes = {
  storeList: PropTypes.array,
};

function MenuListComponent() {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const list = await (await fetch(API_URL + 'api/rest')).json();
        console.log(list);
        setStoreList(list);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchMenu();
    return () => {};
  }, []);

  // console.log(storeList)
  return (
    // <div className='h-screen flex flex-col justify-center items-center'>
    //   <h1 className='text-5xl font-bold' style={{ fontFamily: 'Avenir next'}}>Háptico</h1>
    //   <h3>Soluciones Digitales</h3>
    // </div>
    <LandingLayout>
      <div className='flex flex-col items-start pt-20 mx-24'>
        <h2 className='text-6xl font-bold font-sans'>Casos de Uso</h2>
        <p>Haptico esta creciendo, ya muchos locales en el pais confian en nuestros servicios</p>
      </div>
      <section className="flex flex-row flex-wrap pb-48 pt-12 mx-14">
        {storeList.map((rest) => {
          return (
            <article className="mx-10 overflow-hidden rounded-lg shadow-lg bg-gray-100 transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                className="object-cover w-80 h-56 "
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              />
              <div className="px-2">
                <p className="font-semibold text-lg">{rest.name}</p>
              </div>
            </article>
          );
        })}
      </section>
    </LandingLayout>
  );
}

export default MenuListComponent;
