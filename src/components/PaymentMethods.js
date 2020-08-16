import React from 'react';

function HorizontalCard({ image, title, description, style }) {
    return (
        <div className='flex justify-center m-5 rounded overflow-hidden shadow-lg ' style={style}>
            <img className='object-contain w-1/4' src={image} alt={title} />
            <div className='w-9/12 px-5'>
                <p className='text-lg font-medium'>{title}</p>
                <div className='text-sm' style={{ 'white-space': 'pre-line' }}>{description}</div>
            </div>
        </div>
    )
}

function PaymentMethods({ paymentsMethods, dollarRate, cardContainerStyle, dollarRateStyle }) {

    return (
        <div>
            <div id='price-tag' className="text-right text-md pr-5 fixed w-full" style={dollarRateStyle}>
                <p>La tasa del día es: <b> {dollarRate} Bss </b></p>
            </div>
            <div className='mb-20 mt-10 md:grid md:grid-cols-2' >
                {
                    paymentsMethods.map((paymentsMethod) => {
                        return <HorizontalCard title={paymentsMethod.name} image={paymentsMethod.image} description={paymentsMethod.owner + '\n' + paymentsMethod.identification + '\n' + paymentsMethod.extrainfo} />
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethods;