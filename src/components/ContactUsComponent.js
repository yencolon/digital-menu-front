import React from 'react';

import telegram from 'assets/images/telegrama.svg';
import instagram from 'assets/images/instagram.svg';
import twitter from 'assets/images/twitter.svg';
import whatsapp from 'assets/images/whatsapp.svg';
import facebook from 'assets/images/facebook.svg';


function Section({ title, childComponent, sectionStyle }) {
    return (
        <div className='p-5 m-2' style={sectionStyle}>
            <div className='font-bold text-xl text-left mb-2'>{title}</div>
            {childComponent}
        </div>
    )
}

function ContactUs({ title, image, socialLinks, workingDays, containerStyle, titleStyle = {}, loading, loadingComponent }) {

    const socialNetwork = (network) => {
        switch (network) {
            case 'instagram':
                return (
                    <div>
                        <img src={instagram} className="w-10 m-2" alt='instagram' height={20} width={20} />
                    </div>// <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
                )
            case 'twitter':
                return (
                    <div>
                        <img src={twitter} className="w-10 m-2" alt='twitter' height={20} width={20} />
                    </div>//<TwitterOutlined className='text-4xl mr-5' />
                )
            case 'facebook':
                return (
                    <div>
                        <img src={facebook} className="w-10 m-2" alt='facebook' height={20} width={20} />
                    </div>//<FacebookOutlined className='text-4xl mr-5' />
                )
            case 'whatsapp':
                return (
                    <div>
                        <img src={whatsapp} className="w-10 m-2" alt='whatsapp' height={20} width={20} />
                    </div>//<WhatsAppOutlined className='text-4xl mr-5' />
                )
            case 'telegram':
                return (
                    <div>
                        <img src={telegram} className="w-10 m-2" alt='telegram' height={20} width={20} />
                    </div>
                )
            default: return <div></div>
        }
    }

    return (
        loading ? loadingComponent :
        <div>
            <h1 className='text-xl text-center font-bold' style={titleStyle}>Contactos</h1>
            <Section
                title='Horarios'
                sectionStyle={containerStyle}
                childComponent={
                    <ul>
                        {
                            workingDays.map((day) => {
                                return (
                                    <li className='my-2 text-justify' key={day.day}>
                                        <div style={{backgroundColor: '#F2AF29' }}>
                                            <b >{day.day}</b>
                                        </div>
                                        <p className='text-sm text-right'>{day.startTime} - {day.endTime}</p>
                                    </li>)
                            })
                        }
                    </ul>
                } />
            <Section
                title=''
                sectionStyle={containerStyle}
                childComponent={
                    <div className='flex justify-center'>
                        {
                            socialLinks.map(social => {
                                return (
                                    <div key={social.network} onClick={() => { window.open(social.url, "_blank") }} >
                                        {socialNetwork(social.network)}
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            />
        </div >
    )
}

export default ContactUs;
