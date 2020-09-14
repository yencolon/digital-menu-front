import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';

function HorizontalCard ({ image, title, description, style }) {
    return (
        <div className='flex items-center m-5 rounded overflow-hidden shadow-lg p-5' style={style}>
            <figure className='w-1/4 h-full'>
                <img className='object-fill w-full' src={image} alt={title} />
            </figure>
            <div className='w-9/12 px-5'>
                {/* <p className='text-lg font-lg font-bold'>{title}</p> */}
                <div style={{ whiteSpace: 'pre-line', fontSize: 17 }}>{description}</div>
            </div>
        </div>
    );
}

HorizontalCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    style: PropTypes.object
};

function PaymentMethods ({ paymentsMethods, titleStyle = {}, cardContainerStyle, dollarRateStyle, loadingComponent }) {
    const [dollarRate, setDollarRate] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDollarRate = async () => {
            try {
                const response = await (await fetch('https://api.yadio.io/json')).json();
                return response.USD.rate;
            } catch (error) {
                console.log(error);
            }
        };
        const fetchData = async () => {
            const result = await getDollarRate();
            const resultString = result + '';
            setDollarRate(resultString.substring(0, 3) + ',' + resultString.substring(3, resultString.indexOf('.')));
            setLoading(false);
        };

        fetchData();

        return () => {

        };
    }, []);

    return (
        loading ? loadingComponent
            : <section>
                <h1 className='text-xl text-center font-bold' style={titleStyle}>Métodos de Pago</h1>
                <article className='mt-5 md:grid md:grid-cols-2' >
                    {
                        paymentsMethods.map((paymentsMethod) => {
                            return (
                                <Slide key={paymentsMethod.name} direction='up' cascade triggerOnce>
                                    <HorizontalCard title={paymentsMethod.name} image={paymentsMethod.image} description={paymentsMethod.owner + '\n' + paymentsMethod.identification + '\n' + paymentsMethod.extrainfo} style={cardContainerStyle} />
                                </Slide>);
                        })
                    }
                </article>
                <aside id='price-tag' className="text-center text-md w-full" style={dollarRateStyle}>
                    <p>Tasa del día: {dollarRate} BsS. </p>
                </aside>
            </section>
    );
}

PaymentMethods.propTypes = {
    paymentsMethods: PropTypes.array,
    titleStyle: PropTypes.object,
    cardContainerStyle: PropTypes.object,
    dollarRateStyle: PropTypes.object,
    loadingComponent: PropTypes.element
};

export default PaymentMethods;
