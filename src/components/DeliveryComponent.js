import React from 'react';

function ImageCard({ image, title, description, url, style }) {
    return (
        <div onClick={() => { window.open(url, "_blank") }} className='flex flex-col justify-center items-center m-5 pt-5 rounded overflow-hidden shadow-lg' style={style}>
            <img className='object-cover w-full' src={image} alt={title} />
            <p className='text-lg md:text-xl text-center font-medium'>{title}</p>
        </div>
    )
}

function Delivery({ deliveries, deliveryCardStyle }) {
    return (
        <div>
            <div className='mb-20 grid grid-cols-2 md:grid-cols-4'>
                {
                    deliveries.map((delivery) => {
                        return (
                            <ImageCard
                                image={delivery.image}
                                title={delivery.name}
                                url={delivery.url}
                                description={delivery.description}
                                style={deliveryCardStyle} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Delivery;