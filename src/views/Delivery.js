import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';
import MenuBanner from 'components/common/MenuBanner';
import { useScrollToTop } from 'utils/hooks';

function ImageCard({ image, title, description, url, onloadCount, style }) {
  const [loading, setLoading] = useState(true);
  return (
    <figure
      onClick={() => {
        window.open(url, '_blank');
      }}
      className={`flex flex-col justify-center items-center m-2 landscape:m-5 ${
        loading ? 'animate-pulse bg-gray-400' : ''
      }`}
      style={style}
    >
      <img
        className={`${
          loading
            ? 'h-40== w-40 md:h-40 md:w-40'
            : 'object-cover rounded overflow-hidden shadow-2xl'
        }`}
        src={image}
        alt={title}
        onLoad={() => setLoading(false)}
        loading="lazy"
      />
    </figure>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  onloadCount: PropTypes.func,
  style: PropTypes.object,
};

function Delivery() {
  const scrollRef = useScrollToTop();
  const theme = useThemeState();
  const info = useCurrentRestaurantState();
  const gridSize = info.deliveries.length < 3 ? 2 : 3;
  const grid = gridSize < 3 ? `grid-cols-2` :  `grid-cols-3`;
  const landscape = gridSize === 2 ?  `landscape:grid-cols-2` : `landscape:grid-cols-4`;
  const mdlandscape =  gridSize === 2 ? `md:grid-cols-2`: `md:grid-cols-4`;
  return (
    <section
      ref={scrollRef}
    
      style={{ backgroundColor: theme.colors.backgroundColor }}
    >
      <h1
        className="text-xl text-center font-bold mb-5"
        style={theme.common.pageHeadingStyle}
      >
        Delivery
      </h1>
      <MenuBanner
        hasBanner={theme.booleans.bannerOnDelivery}
        images={theme.assets.advertisementImages}
      />
      <ul
        className={`grid ${grid} ${landscape} ${mdlandscape} py-1`}
      >
        {info.deliveries.map((delivery) => {
          return (
            <li key={delivery.name}>
              <Slide direction="up" cascade triggerOnce>
                <ImageCard
                  image={delivery.image}
                  title={delivery.name}
                  url={delivery.url}
                  description={delivery.description}
                  style={theme.delivery.deliveryCardStyle}
                />
              </Slide>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Delivery;
