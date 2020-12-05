import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseCircleOutlined, CameraOutlined } from '@ant-design/icons';
import { Slide, Zoom } from 'react-awesome-reveal';
import { useThemeState } from 'context/MenuThemeContext';
import { createUseStyles } from 'react-jss';

function ModalImage({ image, show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed right-0 left-0 top-0 bottom-0 flex justify-center bg-black bg-opacity-25 z-40"
      onClick={onClose}
    >
      <div className="bg-transparent h-64 landscape:h-56 flex flex-col justify-center items-center self-center m-10">
        <Zoom>
          <figure>
            <img
              className="object-cover h-128 landscape:h-56"
              src={image}
              alt="imagen"
              loading="lazy"
            ></img>
          </figure>
        </Zoom>
        <button className="w-full bg-white" onClick={onClose}>
          Cerrar
          <CloseCircleOutlined />
        </button>
      </div>
    </div>
  );
}

ModalImage.propTypes = {
  image: PropTypes.string.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

function ItemText({ title, image, description, price, highlight = false }) {
  const theme = useThemeState();
  const classes = createUseStyles(theme.product)();

  const [showModalImage, setShowModalImage] = useState(false);
  return (
    <article>
      {image !== null ? (
        <ModalImage
          image={image}
          show={showModalImage}
          onClose={() => setShowModalImage(false)}
        />
      ) : null}
      <Slide
        className={`px-2 py-2 w-full ${
          highlight ? classes.productContainerHighLightStyle : ''
        }`}
        direction="up"
        cascade
        triggerOnce
      >
        <div className={`${classes.productContainerStyle}`}>
          <div
            className={`flex flex-row ${classes.productTitleStyle}`}
            onClick={() => setShowModalImage(true)}
          >
            <h2 className="font-bold text-lg">{title}</h2>
            {/* FIX */}
            {image !== null ? (
              <div className="rounded-full h-6 w-6 flex items-center justify-center border-black border border-solid ml-2">
                <CameraOutlined className="font-normal text-sm" />
              </div>
            ) : null}
          </div>
          <p className={`text-sm ${classes.priceDescriptionStyle}`}>
            {description}
          </p>
          <div className={`${classes.priceDescriptionStyle}`}>
            {price.map((p, index) => {
              return (
                <span key={index + ' '} className="text-xs mr-5">
                  {p.price}
                </span>
              );
            })}
          </div>
        </div>
      </Slide>
    </article>
  );
}

ItemText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.array,
  image: PropTypes.string,
  highlight: PropTypes.bool,
};

export default ItemText;
