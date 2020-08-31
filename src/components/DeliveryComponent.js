import React from 'react';

function ImageCard({ image, title, description, url, style }) {
    console.log(image)
    return (
        <div onClick={() => { window.open(url, "_blank") }} className='flex flex-col justify-center items-center m-5 rounded overflow-hidden shadow-2xl' style={style}>
            <img className='object-cover w-full' src={process.env.PUBLIC_URL + '/images/' + image} alt={title} />
            {/* <p className='text-lg md:text-xl text-center font-medium'>{title}</p> */}
        </div>
    )
}

function Delivery({ deliveries, deliveryCardStyle = {}, titleStyle = {}}) {
    return (
        <div>
            <h1 className='text-xl text-center font-bold' style={titleStyle}>Delivery</h1>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                    deliveries.map((delivery) => {
                        console.log(delivery)
                        return (
                            <ImageCard
                                key={delivery.name}
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