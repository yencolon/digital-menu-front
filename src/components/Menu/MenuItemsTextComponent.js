import React, { useState, Fragment } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Search } from 'components/SvgComponents';

function ModalImage({ image, show, onClose }) {
    if (!show) return <div></div>
    return (
        <div className='fixed right-0 left-0 top-0 bottom-0 bg-black-400 flex justify-center' onClick={onClose}>
            <div className='shadow-lg bg-transparent h-64 landscape:h-56 flex flex-col justify-center items-center self-center m-10'>
                <img className='object-cover h-full' src={image} alt='imagen'></img>
                <button className='w-full bg-white ' onClick={onClose}>
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
                <div className='flex flex-row justify-center align-center' onClick={() => setShowModalImage(true)}>
                    <h1 className="font-bold text-lg" style={titleStyle} >{title}</h1>
                    <Search width={12} style={{ paddingTop: '4.2px', marginLeft: '2.5px' }} />
                </div>
                <p className="text-sm" style={descriptionStyle} >{description}</p>
                <p className="text-xs" style={descriptionStyle}>{price}</p>
            </div>
        </Fragment>

    );
}

export default ItemText;