import React from 'react';

// import telegram from 'assets/images/telegrama.svg';
import instagram from 'assets/images/instagram.svg';
// import twitter from 'assets/images/twitter.svg';
// import whatsapp from 'assets/images/whatsapp.svg';
// import facebook from 'assets/images/facebook.svg';

function SocialNetwork({ network }) {

    return <div><img src={instagram} className="w-10 m-2" alt='instagram' height={20} width={20}/></div>
    // switch (network) {
    //     case 'instagram':
    //         return (
    //             // <InstagramOutlined className='text-4xl mr-5' />
    //             <img src={instagram} className="w-10 m-2" alt='instagram' height={20} width={20}/>// <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
    //         )
    //     case 'twitter':
    //         return (
    //             <img src={twitter} className="w-10 m-2" alt='twitter'  height={20} width={20}/>//<TwitterOutlined className='text-4xl mr-5' />
    //         )
    //     case 'facebook':
    //         return (
    //             <img src={facebook} className="w-10 m-2" alt='facebook'  height={20} width={20} />//<FacebookOutlined className='text-4xl mr-5' />
    //         )
    //     case 'whatsapp':
    //         return (
    //             <img src={whatsapp} className="w-10 m-2" alt='whatsapp'  height={20} width={20} />//<WhatsAppOutlined className='text-4xl mr-5' />
    //         )
    //     case 'telegram':
    //         return (
    //             <img src={telegram} className="w-10 m-2" alt='telegram'  height={20} width={20} />
    //         )
    //     default: return <div></div>
    // }
}

function Section({ title, childComponent, sectionStyle }) {
    return (
        <div className='p-5 m-2' style={sectionStyle}>
            <div className='font-bold text-xl text-left mb-2'>{title}</div>
            {childComponent}
        </div>
    )
}

function ContactUs({ title, image, socialLinks, workingDays, containerStyle }) {
    return (
        <div className='mb-20'>
            <h1 className='text-xl text-center font-bold'>{title}</h1>
            <Section
                title='Horarios'
                sectionStyle={containerStyle}
                childComponent={
                    <ul className='md:flex md:flex-row md:justify-around'>
                        {
                            workingDays.map((day) => {
                                return (
                                    <li className='my-2 text-justify' key={day.day}>
                                            <b>{day.day}</b>
                                            <p className='text-sm'>{day.startTime} - {day.endTime}</p>
                                    </li>)
                            })
                        }
                    </ul>
                } />
            <Section
                title='title'
                sectionStyle={containerStyle}
                childComponent={
                    <div className='flex justify-center'>
                        {
                            socialLinks.map(social => {
                                return (
                                    <div key={social.network} onClick={() => { window.open(social.url, "_blank") }} >
                                        <SocialNetwork network={social.network} />
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
