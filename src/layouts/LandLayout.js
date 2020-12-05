import * as React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'components/landing/nav';
import { Footer } from 'components/landing/footer';

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
