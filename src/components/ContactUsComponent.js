import React, { useState } from 'react';
import { Instagram, Twitter, Whatsapp, Facebook, Telegram } from './SvgComponents';

function Section({ title, childComponent, sectionStyle }) {
    return (
        <div className='p-5 m-2' style={sectionStyle}>
            <div className='font-bold text-xl text-left mb-2'>{title}</div>
            {childComponent}
        </div>
    )
}

function ContactUs({ title, image, socialLinks, workingDays, containerStyle, titleStyle = {}, loadingComponent }) {
                        
    const [loading, setLoading] = useState(false);
    const socialNetwork = (network) => {
        switch (network) {
            case 'instagram':
                return (
                    <Instagram  width={30} />
                )
            case 'twitter':
                return (
                    <Twitter width={30} />
                )
            case 'facebook':
                return (
                    <Facebook width={30} />
                )
            case 'whatsapp':
                return (
                    <Whatsapp width={30} />
                )
            case 'telegram':
                return (
                    <Telegram width={30} />
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
                    <div className='flex justify-around'>
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
