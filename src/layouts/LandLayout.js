import * as React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'components/landing/Nav';
import { Footer } from 'components/landing/Footer';

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.element,
};

export default LandingLayout;
