import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseCircleOutlined, CameraOutlined } from '@ant-design/icons';
import { Slide } from 'react-awesome-reveal';

function ModalImage ({ image, show, onClose }) {
    if (!show) return <div></div>;
    return (
        <figure className='fixed right-0 left-0 top-0 bottom-0 flex justify-center bg-black bg-opacity-25 z-30' onClick={onClose}>
            <div className='shadow-lg bg-transparent h-64 landscape:h-56 flex flex-col justify-center items-center self-center m-10'>
                <img className='object-cover h-full' src={image} alt='imagen'></img>
                <button className='w-full bg-white ' onClick={onClose}>
                    Cerrar
                    <CloseCircleOutlined />
                </button>
            </div>
        </figure>
    );
}

ModalImage.propTypes = {
    image: PropTypes.string.isRequired,
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

function ItemText ({ title, image, description, price, highlight = false, containerStyle, highLightStyle, titleStyle, descriptionStyle }) {
    const [showModalImage, setShowModalImage] = useState(false);

    return (
        <article>
            <ModalImage image={image} show={showModalImage} onClose={() => setShowModalImage(false)} />
            <Slide className='px-2 py-2 w-full' style={(highlight ? highLightStyle : {})} direction='up' cascade triggerOnce >
                <div style={containerStyle}>
                    <div className='flex flex-row justify-center align-center' onClick={() => setShowModalImage(true)}>
                        <h2 className='font-bold text-lg' style={titleStyle} >{title}</h2>
                        <div className='rounded-full h-6 w-6 flex items-center justify-center border-black border border-solid ml-2'>
                            <CameraOutlined className='font-normal text-sm' />
                        </div>
                    </div>
                    <p className='text-sm' style={descriptionStyle} >{description}</p>
                    <p className='text-xs' style={descriptionStyle}>{price}</p>
                </div>
            </Slide>
        </article>
    );
}

ItemText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    style: PropTypes.object,
    highlight: PropTypes.bool,
    containerStyle: PropTypes.object,
    highLightStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    descriptionStyle: PropTypes.object
};

export default ItemText;
