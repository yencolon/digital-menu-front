import React, { useState, useEffect } from 'react';
import LoadingMenu from './LoadingComponent';

function HorizontalCard({ image, title, description, style }) {
    return (
        <div className='flex items-center m-5 rounded overflow-hidden shadow-lg p-5' style={style}>
            <div className='w-1/4 h-full'>
                <img className='object-fill w-full' src={process.env.PUBLIC_URL + '/images/' +image} alt={title} />
            </div>
            <div className='w-9/12 px-5'>
                {/* <p className='text-lg font-lg font-bold'>{title}</p> */}
                <div style={{ whiteSpace: 'pre-line',  fontSize: 17 }}>{description}</div>
            </div>
        </div>
    )
}

function PaymentMethods({ paymentsMethods, titleStyle = {}, cardContainerStyle, dollarRateStyle, loading, loadingComponent }) {

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
            const resultString  = result + '';
            setDollarRate(resultString.substring(0, 3) + ',' + resultString.substring(3, resultString.indexOf('.')));
        };

        fetchData()

        return () => {

        }
    }, [])

    return (
        loading ? loadingComponent :
        <div>
            <h1 className='text-xl text-center font-bold' style={titleStyle}>Métodos de Pago</h1>
            <div className='mt-5 md:grid md:grid-cols-2' >
                {
                    paymentsMethods.map((paymentsMethod) => {
                        return <HorizontalCard key={paymentsMethod.name} title={paymentsMethod.name} image={paymentsMethod.image} description={paymentsMethod.owner + '\n' + paymentsMethod.identification + '\n' + paymentsMethod.extrainfo} style={cardContainerStyle} />
                    })
                }
            </div>
            <div id='price-tag' className="text-center text-md w-full" style={dollarRateStyle}>
                <p>Tasa del día: {dollarRate} BsS. </p>
            </div>
        </div>
    )
}

export default PaymentMethods;