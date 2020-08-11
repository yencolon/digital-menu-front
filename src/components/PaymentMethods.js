import React from 'react';

function Method({ name, identification, owner, extrainfo, cardStyle }) {
    return (
        <div className='shadow-md p-5 m-5 border border-solid border-black text-xl' style={cardStyle}>
            <p><b>{name}</b></p>
            <p>{identification}</p>
            <p>{owner}</p>
            <p>{extrainfo}</p>
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
                        return <Method name={paymentsMethod.name} owner={paymentsMethod.owner} identification={paymentsMethod.identification} extrainfo={paymentsMethod.extrainfo} cardStyle={cardContainerStyle} />
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethods;