import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseCircleOutlined, CameraOutlined } from '@ant-design/icons';
import { Slide, Zoom } from 'react-awesome-reveal';
import { useThemeState } from 'context/MenuThemeContext';

function ModalImage({ image, show, onClose }) {
    if (!show) return <div></div>;

    return (
        <div className='fixed right-0 left-0 top-0 bottom-0 flex justify-center bg-black bg-opacity-25 z-40' onClick={onClose}>
            <div className='bg-transparent h-64 landscape:h-56 flex flex-col justify-center items-center self-center m-10'>
                <Zoom>
                    <figure>
                        <img className='object-cover h-128 landscape:h-56' src={image} alt='imagen' loading='lazy'></img>
                    </figure>
                </Zoom>
                <button className='w-full bg-white ' onClick={onClose}>
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
    onClose: PropTypes.func.isRequired
};

function ItemText({ title, image, description, price, highlight = false }) {
    const theme = useThemeState();
    const [showModalImage, setShowModalImage] = useState(false);
    return (
        <article>
            {
                image !== null
                    ? <ModalImage image={image} show={showModalImage} onClose={() => setShowModalImage(false)} />
                    : null
            }
            <Slide className='px-2 py-2 w-full' style={(highlight ? theme.product.productContainerHighLightStyle : {})} direction='up' cascade triggerOnce >
                <div style={theme.product.productContainerStyle}>
                    <div className='flex flex-row' style={theme.product.productTitleStyle} onClick={() => setShowModalImage(true)}>
                        <h2 className='font-bold text-lg' >{title}</h2>
                        {/* FIX */}
                        {
                            image !== null
                                ? <div className='rounded-full h-6 w-6 flex items-center justify-center border-black border border-solid ml-2'>
                                    <CameraOutlined className='font-normal text-sm' />
                                </div> : null
                        }
                    </div>
                    <p className='text-sm' style={theme.product.productDescriptionStyle}>{description}</p>
                    <div className='flex flex-row'>
                        {price.map((p, index) => {
                            return <p key={index + ' '} className='text-xs mr-5' style={theme.product.priceDescriptionStyle}>{p.price}</p>;
                        })}
                    </div>
                </div>
            </Slide>
        </article>
    );
}

ItemText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    highlight: PropTypes.bool
};

export default ItemText;
