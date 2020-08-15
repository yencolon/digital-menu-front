import React from 'react';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function SocialNetwork({ network }) {
    switch (network) {
        case 'instagram':
            return (
                <InstagramOutlined className='text-4xl mr-5' />
            )
        case 'twitter':
            return (
                <TwitterOutlined className='text-4xl mr-5' />
            )
        case 'facebook':
            return (
                <FacebookOutlined className='text-4xl mr-5' />
            )
        case 'whatsapp':
            return (
                <WhatsAppOutlined className='text-4xl mr-5' />
            )
        case 'telegram':
            return (
                <svg className="w-8 h-8 inline mr-5" t="1597279702374" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1032">
                    <path d="M873.6 150.4C777.6 52.8 649.6 0 512 0S246.4 52.8 150.4 150.4 0 374.4 0 512s52.8 265.6 150.4 361.6S374.4 1024 512 1024s265.6-52.8 361.6-150.4S1024 649.6 1024 512s-52.8-265.6-150.4-361.6zM512 974.4C256 974.4 49.6 768 49.6 512S256 49.6 512 49.6s462.4 208 462.4 462.4S768 974.4 512 974.4z" p-id="1033"></path><path d="M753.6 275.2c-17.6-11.2-44.8-1.6-51.2 1.6L212.8 467.2c-17.6 6.4-36.8 20.8-33.6 43.2 3.2 25.6 30.4 35.2 33.6 36.8l113.6 38.4c8 28.8 35.2 116.8 41.6 136 4.8 16 11.2 35.2 28.8 35.2 1.6 1.6 4.8 1.6 9.6 1.6 11.2 0 17.6-3.2 20.8-8l65.6-60.8 110.4 84.8c1.6 1.6 1.6 1.6 4.8 1.6 9.6 4.8 17.6 4.8 24 4.8s14.4-1.6 17.6-3.2c19.2-8 27.2-25.6 28.8-28.8 0-1.6 1.6-1.6 1.6-3.2L768 307.2V304c0-17.6-9.6-25.6-14.4-28.8zM424 702.4l6.4-60.8 32 24-38.4 36.8z m219.2 35.2c-1.6 1.6-3.2 4.8-6.4 6.4-3.2 1.6-6.4 1.6-11.2-1.6l-121.6-94.4-60.8-48c51.2-44.8 209.6-187.2 216-195.2 6.4-6.4 14.4-14.4 12.8-25.6 0-1.6 0-1.6-1.6-3.2-1.6-6.4-4.8-12.8-11.2-16-11.2-6.4-24-1.6-35.2 4.8L336 548.8l-113.6-38.4c-1.6-1.6-4.8-1.6-6.4-4.8 1.6-1.6 4.8-3.2 6.4-3.2h1.6l488-192h1.6c3.2-1.6 8-3.2 12.8-3.2l-83.2 430.4z" p-id="1034">
                    </path>
                </svg>
            )
        default: return <div></div>
    }
}

function Section({ title, childComponent, sectionStyle }) {
    return (
        <div className='p-5 m-5' style={sectionStyle}>
            <div class='font-bold text-xl text-center mb-2'>{title}</div>
            {childComponent}
        </div>
    )
}

function ContactUs({ title, image, socialLinks, workingDays, containerStyle }) {
    return (
        <div className='mb-20 divide-y divide-gray-400'>
            <Section
                title='Horarios'
                sectionStyle={containerStyle}
                childComponent={
                    <ul>
                        {
                            workingDays.map((day) => {
                                return (
                                    <li className='my-2 text-justify'>
                                        <div>
                                            <b>{day.day}</b> de <b>{day.startTime}</b> hasta <b>{day.endTime}</b>
                                        </div>
                                    </li>)
                            })
                        }
                    </ul>
                } />
            <Section
                title='Redes Sociales'
                sectionStyle={containerStyle}
                childComponent={
                    <div className='md:grid md:grid-cols-2'>
                        {
                            socialLinks.map(social => {
                                return (
                                    <div className='block my-5'>
                                        <SocialNetwork network={social.network} />
                                        <Link onClick={() => { window.open(social.url, "_blank") }}>{social.identification}</Link>
                                    </div>)
                            })
                        }
                    </div>
                }
            />
        </div >
    )
}

export default ContactUs;
