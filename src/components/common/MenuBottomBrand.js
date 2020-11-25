import React from 'react';
import PropTypes from 'prop-types';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';
import { createUseStyles } from 'react-jss';

function MenuBottomBrand({ title, image, style }) {
  const theme = useThemeState();
  const info = useCurrentRestaurantState();
  const classes = createUseStyles(theme.common)();
  const FormattedAddress = () => {
    const addressLine = info.location.address.split(',');
    return addressLine.map((address) => {
      return (
        <>
          <h6 className="block">{address}</h6>
        </>
      );
    });
  };
  return (
    <div
      className={`flex flex-col items-center justify-end full-w pb-20 md:py-5 ${classes.bottomBrandStyle}`}
    >
      <div className="rounded-full h-120 w-120 flex items-center justify-center">
        <img src={theme.assets.logo} alt="logo" height={160} width={160} />
      </div>
      <div
        className={`text-center text-xs ${classes.bottomBrandTextInfoStyle}`}
      >
        <a
          className="block"
          href={info.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedAddress />
          <h6>{info.location.city}</h6>
        </a>
        <a href="tel:04144395260">{info.contacts.phone}</a>
      </div>
    </div>
  );
}

MenuBottomBrand.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  style: PropTypes.object,
  addressLine: PropTypes.string,
  addresCity: PropTypes.string.isRequired,
};

export default MenuBottomBrand;
