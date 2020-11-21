import * as React from 'react';
import PropTypes from 'prop-types';
import GoogleFontLoader from 'react-google-font-loader';

const LoadFonts = ({ fonts }) => {
  const filterFonts = fonts.filter((font) => font !== undefined);
  if (filterFonts.length === 0) return <div></div>;

  const fontsToLoad = filterFonts.map((font) => {
    return {
      font: font,
      weights: [400, '500', '600', '700', '800', 900],
    };
  });

  return <GoogleFontLoader fonts={fontsToLoad} />;
};

LoadFonts.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string),
};

export default LoadFonts;
