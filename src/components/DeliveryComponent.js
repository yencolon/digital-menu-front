import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slide, AttentionSeeker } from "react-awesome-reveal";

function ImageCard({ image, title, description, url, loadingComponent, onloadCount, style }) {
    const [loading, setLoading] = useState(true);
    return (

        <div onClick={() => { window.open(url, "_blank") }} className={`flex flex-col justify-center items-center m-2 landscape:m-5 ${loading ? `animate-pulse bg-gray-400` : ``}`} style={style}>
            <img className={`object-cover rounded overflow-hidden shadow-2xl ${loading ? `h-24 w-24 md:h-48 md:w-48` : ''}`} src={image} alt={title} onLoad={() => setLoading(false)} loading='lazy' />
        </div>
    )
}

ImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    loadingComponent: PropTypes.element,
    onloadCount: PropTypes.func,
    style: PropTypes.object
}

function Delivery({ deliveries, deliveryCardStyle = {}, titleStyle = {}, loadingComponent }) {
    return (
        <div>
            <h1 className='text-xl text-center font-bold' style={titleStyle}>Delivery</h1>
            <div className='grid grid-cols-3 landscape:grid-cols-4 md:grid-cols-4'>
                {
                    deliveries.map((delivery) => {
                        return (
                            <Slide direction='up' cascade triggerOnce>
                                <ImageCard
                                    key={delivery.name}
                                    image={delivery.image}
                                    title={delivery.name}
                                    url={delivery.url}
                                    description={delivery.description}
                                    style={deliveryCardStyle}
                                    loadingComponent={loadingComponent}
                                />
                            </Slide>
                        )
                    })
                }
            </div>
        </div>
    )
}

Delivery.propTypes = {
    deliveries: PropTypes.array.isRequired,
    deliveryCardStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    loadingComponent: PropTypes.element
}

export default Delivery;