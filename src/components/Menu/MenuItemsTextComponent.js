import React, { useState, Fragment } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';

function ModalImage({ image, show, onClose }) {
    if (!show) return <div></div>
    return (
        <div className='fixed right-0 left-0 top-0 bottom-0 bg-black-100 z-40' onClick={onClose}>
            <div className='shadow-lg bg-white z-50 right-0 left-0 top-0 mx-auto mt-24 w-4/5 md:w-1/4 m-5' style={{ height: 450 }}>
                <img className='object-cover h-full' src={image} alt='imagen'></img>
                <button className='bg-white w-full ' onClick={onClose}>
                    Cerrar
                    <CloseCircleOutlined />
                </button>
            </div>
        </div>
    )
}


function ItemText({ title, image, description, price, containerStyle, titleStyle, descriptionStyle }) {
    const [showModalImage, setShowModalImage] = useState(false);
    return (
        <Fragment>
            <ModalImage image={image} show={showModalImage} onClose={() => setShowModalImage(false)} />
            <div className="px-2 py-2 w-full" style={containerStyle}>
                <h1 className="font-bold text-lg" style={titleStyle} onClick={() => setShowModalImage(true)}>{title}</h1>
                <p className="text-sm" style={descriptionStyle} >{description}</p>
                <p className="text-xs" style={descriptionStyle}>{price}</p>
            </div>
        </Fragment>

    );
}

export default ItemText;