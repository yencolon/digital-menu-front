import * as React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'components/landing/Nav';
import { Footer } from 'components/landing/Footer';
import { Hero } from 'components/landing/Hero';
import { Form } from 'components/landing/Form';

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Hero/>
      {children}
      <Form />
      <Footer />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.element,
};

export default LandingLayout;
