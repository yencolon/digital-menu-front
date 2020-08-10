import React, { useEffect } from 'react';

import 'assets/styles/menu-button-group.css';
import { Link } from 'react-router-dom';

function Tabs({ buttons, selected, onButtonClicked, containerStyle, tabStyle }) {
    return (
        <ul className='flex justify-around' style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <li className='border-b border-solid border-black' active={button.id === selected} key={button.id} style={tabStyle}>
                            <Link  onClick={(e) => {
                                e.preventDefault()
                                onButtonClicked(button.id)}}
                            >{button.name}</Link>
                        </li>)
                })
            }
        </ul>

    );
}

function Buttons({ buttons, onButtonClicked, selected, containerStyle, buttonStyle }) {
    return (
        <div className='flex justify-center' style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <button id='button' className='bg-blue-500  text-white font-300 py-1 px-4 my-2 mx-5' onClick={() => onButtonClicked(button.id)} style={buttonStyle}>{button.name}</button>
                    )
                })
            }
        </div>
    );
}

function MenuButtons({ buttons, renderAs = 'buttons', selected, onButtonClicked, backgroundColor = 'black', textColor = 'white' , buttonStyle = {}}) {

    useEffect(() => {
        const header = document.getElementById("buttomGroup");
        
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("fixed");
            } else {
                header.classList.remove('fixed')
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div id='buttomGroup' className='w-full' style={{ backgroundColor: backgroundColor, color: textColor }}>
            {
                renderAs === 'buttons' ?
                    <Buttons buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{backgroundColor: backgroundColor}} buttonStyle={{ backgroundColor: backgroundColor, color: textColor , ...buttonStyle}}/>
                    :
                    <Tabs buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{backgroundColor: buttonStyle['background-color']}} tabStyle={{ backgroundColor: backgroundColor, color: textColor , ...buttonStyle}} />
            }
        </div>
    );
}

export default MenuButtons;