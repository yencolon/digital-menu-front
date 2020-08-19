import React from 'react';

function HorizontalCard({ image, title, description, style }) {
    return (
        <div className='flex items-center m-5 rounded overflow-hidden shadow-lg p-5' style={style}>
            <div className='w-1/4 h-full'>
                <img className='object-fill w-full' src={image} alt={title} />
            </div>
            <div className='w-9/12 px-5'>
                <p className='text-lg font-lg font-bold'>{title}</p>
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
            <h1 className='text-xl text-center font-bold mt-8'>Métodos de Pago</h1>
            <div className='mb-20 mt-5 md:grid md:grid-cols-2' >
                {
                    paymentsMethods.map((paymentsMethod) => {
                        return <HorizontalCard title={paymentsMethod.name} image={paymentsMethod.image} description={paymentsMethod.owner + '\n' + paymentsMethod.identification + '\n' + paymentsMethod.extrainfo} style={cardContainerStyle}/>
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethods;