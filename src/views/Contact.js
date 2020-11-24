import React from 'react';
import PropTypes from 'prop-types';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';
import CarouselComponent from '../components/common/Carousel';
import { InstagramOutlined } from '@ant-design/icons';
import { useScrollToTop } from 'utils/hooks';

const ContactUs = ({ title }) => {
  const scrollRef = useScrollToTop();
  const theme = useThemeState();
  const info = useCurrentRestaurantState();
  return (
    <section
      ref={scrollRef}
      className="flex flex-col justify-start h-screen"
      style={{ backgroundColor: theme.colors.backgroundColor }}
    >
      <h1
        className="text-xl text-center font-bold mb-5"
        style={theme.common.pageHeadingStyle}
      >
        Contactos
      </h1>
      <CarouselComponent images={theme.assets.carouselImages} />
      <section
        className="text-center flex-col text-md my-10 justify-around"
        style={theme.contacts.contactStyle}
      >
        {info.workingDays.map((day) => {
          return (
            <>
              <p>
                {day.label}
                <br></br>
                {day.from} - {day.to}
              </p>
            </>
          );
        })}
        <br></br>
        {theme.booleans.showEmailOnContacts ? (
          <>
            <a href="mailto:elpatron.sugerencias@gmail.com">
              <b>Buzón de Sugerencias:</b>
              <br></br> {info.contacts.email}
            </a>
            <a href={`https://wa.me/${info.contacts.whatsapp}`}>
              <b>Quejas y Reclamos</b>
            </a>
          </>
        ) : null}
        <a
          href={`https://${info.contacts.web}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.contacts.web}
        </a>
        <br></br>
        <a
          className="inline-flex items-center"
          href={`https://www.instagram.com/${info.contacts.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined className="fill-current w-4 h-4 mr-2" width={26} />
          <span>{info.contacts.instagram}</span>
        </a>
      </section>
    </section>
  );
};

ContactUs.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactUs;
