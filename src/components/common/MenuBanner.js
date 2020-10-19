import React from 'react';
import PropTypes from 'prop-types';
import CarouselComponent from 'components/common/Carousel';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
        partialVisibilityGutter: 20
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 20
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 1
    }
};

export default function MenuBanner ({ hasBanner = false, images }) {
    if (!hasBanner) return null;
    return (
        <section className={'flex items-center justify-center mb-2 md:mt-5'} style={{ marginTop: -1 }}>
            <CarouselComponent images={images} autoPlaySpeed={2500} centerMode={false} responsive={responsive} />
        </section>
    );
}

MenuBanner.propTypes = {
    hasBanner: PropTypes.bool,
    images: PropTypes.array
};
