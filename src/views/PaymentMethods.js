import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';
import { useThemeState } from 'context/MenuThemeContext';
import { useCurrentRestaurantState } from 'context/CurrentRestaurantContext';
import { useScrollToTop } from 'utils/hooks';

function HorizontalCard({ image, title, description, style }) {
  return (
    <article
      className="flex items-center m-2 rounded overflow-hidden shadow-lg p-3"
      style={style}
    >
      <figure className="w-2/6 h-full">
        <img className="object-cover w-full" src={image} alt={title} />
      </figure>
      <ul className="w-full pl-6">
        {/* <p className='text-lg font-lg font-bold'>{title}</p> */}
        {description.map((text, index) => {
          return <li key={index + ''}>{text}</li>;
        })}
        {/* <div style={{ whiteSpace: 'pre-line' }}>{}</div> */}
      </ul>
    </article>
  );
}

HorizontalCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
};

function PaymentMethods() {
  const scrollRef = useScrollToTop();
  const theme = useThemeState();
  const info = useCurrentRestaurantState();

  return (
    <section
      ref={scrollRef}
      style={{ backgroundColor: theme.colors.backgroundColor }}
    >
      <h1
        className="text-xl text-center font-bold"
        style={theme.common.pageHeadingStyle}
      >
        Métodos de Pago
      </h1>
      <ul className="mt-2 md:grid md:grid-cols-2 justify-center items-center">
        {info.payments.map((paymentsMethod) => {
          return (
            <li key={paymentsMethod.name}>
              <Slide direction="up" cascade triggerOnce>
                <HorizontalCard
                  title={paymentsMethod.name}
                  image={paymentsMethod.image}
                  description={[
                    paymentsMethod.owner,
                    paymentsMethod.identification,
                    paymentsMethod.extrainfo,
                    paymentsMethod.email,
                    paymentsMethod.phone,
                  ]}
                  style={theme.payments.paymentCardStyle}
                />
              </Slide>
            </li>
          );
        })}
      </ul>
      {/* <div id='price-tag' className="text-center text-md w-full" style={theme.payments.dollarRateStyle}>
                <p>Tasa del día: {dollarRate} BsS. </p>
            </div> */}
    </section>
  );
}

export default PaymentMethods;
