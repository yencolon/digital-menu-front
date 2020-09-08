import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// function Section({ title, childComponent, sectionStyle }) {
//     return (
//         <div className='p-5 m-2' style={sectionStyle}>
//             <div className='font-bold text-xl text-left mb-2'>{title}</div>
//             {childComponent}
//         </div>
//     )
// }

function ContactUs({ title, imagesToShow, addresLine, addresCoordinate, socialLinks, workingDays, containerStyle, titleStyle = {}, loadingComponent }) {

    const [loading, setLoading] = useState(false);

    return (
        loading ? loadingComponent :
            <div>
                <h1 className='text-xl text-center font-bold' style={titleStyle}>Horarios</h1>
                <div className='mt-10 '>
                    <Carousel autoPlay infiniteLoop={true} showIndicators={false} showArrows={true} showThumbs={false} centerMode={true} showStatus={false} centerSlidePercentage={40} >
                        {
                            imagesToShow.map(image => {
                                return (
                                    <div>
                                        <img alt="" src={image} className='object-cover lg:w-64' />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className='text-center flex-col text-sm my-10 justify-around'>
                    <p>Jueves a Sábado 
                     11:00 AM - 6:00 PM <br></br>
                     Domingo
                     11:00 AM - 3:00 PM</p>
                    <a href="tel:04144395260"> 0414 439 52 60</a>
                </div>
            </div >
    )
}

export default ContactUs;