import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'shared/apiUrl';
import LandingLayout from 'layouts/LandLayout';
import { Section } from 'components/landing/section';

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
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold' style={{ fontFamily: 'Avenir next'}}>Háptico</h1>
      <h3>Soluciones Digitales</h3>
    </div>
    // <LandingLayout>
    //   <Section />
    //   <section>
    //     {storeList.map((rest) => {
    //       return <article>{rest.name}</article>;
    //     })}
    //   </section>
    // </LandingLayout>
  );
}

export default MenuListComponent;
