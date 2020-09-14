import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function Section({ title, childComponent, sectionStyle }) {
//     return (
//         <div className='p-5 m-2' style={sectionStyle}>
//             <div className='font-bold text-xl text-left mb-2'>{title}</div>
//             {childComponent}
//         </div>
//     )
// }

function ContactUs ({ title, imagesToShow, addresLine, addresCoordinate, socialLinks, workingDays, containerStyle, titleStyle = {}, loadingComponent }) {
    const [loading, setLoading] = useState(false);

    return (
        loading ? loadingComponent
            : <div>
                <h1 className='text-xl text-center font-bold' style={titleStyle}>Horarios</h1>
                <div className='mt-10 '>
                    <Carousel autoPlay infiniteLoop={true} showIndicators={false} showArrows={true} showThumbs={false} centerMode={true} showStatus={false} centerSlidePercentage={40} >
                        {
                            imagesToShow.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <img alt="" src={image} className='object-cover lg:w-64' />
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                </div>
                <section className='text-center flex-col text-md my-10 justify-around'>
                    <p>Jueves a Sábado
                    11:00 AM - 6:00 PM
                    <br></br>
                     Domingo
                     11:00 AM - 3:00 PM</p>
                    <br></br>
                    <a href="mailto:elpatron.sugerencias@gmail.com"><b>Buzón de Sugerencias:</b> elpatron.sugerencias@gmail.com</a>
                    <br></br>
                    <br></br>
                    <a href='https://wa.me/584144395260'><b>Quejas y Reclamos</b></a>
                </section>
            </div >
    );
}

ContactUs.propTypes = {
    title: PropTypes.string.isRequired,
    imagesToShow: PropTypes.string,
    addresLine: PropTypes.string,
    addresCoordinate: PropTypes.string,
    socialLinks: PropTypes.arrayOf(object),
    workingDays: PropTypes.arrayOf(object),
    containerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    loadingComponent: PropTypes.element
};

export default ContactUs;
