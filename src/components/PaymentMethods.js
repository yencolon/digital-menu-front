import React, { useState, useEffect } from 'react';

function HorizontalCard({ image, title, description, style }) {
    return (
        <div className='flex items-center m-5 rounded overflow-hidden shadow-lg p-5' style={style}>
            <div className='w-1/4 h-full'>
                <img className='object-fill w-full' src={image} alt={title} />
            </div>
            <div className='w-9/12 px-5'>
                {/* <p className='text-lg font-lg font-bold'>{title}</p> */}
                <div className='text-sm' style={{ whiteSpace: 'pre-line' }}>{description}</div>
            </div>
        </div>
    )
}

function PaymentMethods({ paymentsMethods, cardContainerStyle, dollarRateStyle }) {

    const [dollarRate, setDollarRate] = useState(0);

    useEffect(() => {
        const getDollarRate = async () => {
            try {
                const response = await(await fetch('https://api.yadio.io/json')).json();
                return response.USD.rate;
            } catch (error) {
                console.log(error);
            }
        }
        const fetchData = async () => {
            const result = await getDollarRate();
            setDollarRate(result)
        };

        fetchData()

        return () => {

        }
    }, [])

    return (
        <div>
            <div id='price-tag' className="text-right text-md pr-5 fixed w-full" style={dollarRateStyle}>
                <p>La tasa del día es: <b> {dollarRate} Bss </b></p>
            </div>
            <h1 className='text-xl text-center font-bold mt-8'>Métodos de Pago</h1>
            <div className='mt-5 md:grid md:grid-cols-2' >
                {
                    paymentsMethods.map((paymentsMethod) => {
                        return <HorizontalCard key={paymentsMethod.name} title={paymentsMethod.name} image={paymentsMethod.image} description={paymentsMethod.owner + '\n' + paymentsMethod.identification + '\n' + paymentsMethod.extrainfo} style={cardContainerStyle} />
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethods;