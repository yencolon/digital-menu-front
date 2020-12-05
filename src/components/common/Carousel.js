import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const defaultResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const CarouselComponent = ({
  images,
  autoPlaySpeed = 1000,
  centerMode = true,
  responsive,
}) => {
  if (images.length === 0) return null;

  return (
    <Carousel
      additionalTransfrom={0}
      centerMode={centerMode}
      // partialVisible={true}
      arrows={false}
      responsive={responsive || defaultResponsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      transitionDuration={1000}
      className="w-full"
    >
      {images.map((image, index) => {
        return (
          <figure key={index} className="self-center">
            <img alt="" className="" src={image} loading="eager" />
          </figure>
        );
      })}
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  images: PropTypes.array,
  autoPlaySpeed: PropTypes.number,
  centerMode: PropTypes.bool,
  responsive: PropTypes.object,
};

export default CarouselComponent;
