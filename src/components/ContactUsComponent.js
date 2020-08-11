import React, { Fragment } from 'react';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, WhatsAppOutlined, createFromIconfontCN } from '@ant-design/icons';

function SocialNetwork({ network, identification, url }) {
    switch (network) {
        case 'instagram':
            return (
                <Fragment>
                    <InstagramOutlined className='text-4xl mr-5' />
                    {identification}
                </Fragment>
            )
        case 'twitter':
            return (
                <Fragment>
                    <TwitterOutlined className='text-4xl mr-5' />
                    {identification}
                </Fragment>
            )
        case 'facebook':
            return (
                <Fragment>
                    <FacebookOutlined className='text-4xl mr-5' />
                    {identification}
                    <button className='btn'>Ir</button>
                </Fragment>
            )
        case 'whatsapp':
            return (
                <Fragment>
                    <WhatsAppOutlined className='text-4xl mr-5' />
                    {identification}
                </Fragment>
            )
        default: return <div></div>
    }
}

function Section({ title, childComponent, sectionStyle }) {
    return (
        <div className='p-5' style={sectionStyle}>
            <div class='font-bold text-xl text-center mb-2'>{title}</div>
            {childComponent}
        </div>
    )
}

function ContactUs({ title, image, socialLinks, workingDays, containerStyle }) {
    return (
        <div className='flex flex-col flex-1 justify-around divide-y divide-gray-400 px-10 mb-20'>
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
                                            {day.day} de {day.startTime} hasta {day.endTime}
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
                                        <SocialNetwork network={social.network} identification={social.identification} url={social.url} />
                                    </div>)
                            })
                        }
                    </div>
                }
            />
        </div>
    )
}

export default ContactUs;
