import React, { useEffect } from 'react';

import 'assets/styles/menu-button-group.css';
import { Link } from 'react-router-dom';

function Tabs({ buttons, selected, onButtonClicked, containerStyle, tabStyle }) {
    return (
        <ul className='flex justify-center flex-wrap' style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <li className='border-b border-solid border-black' active={button.id === selected} key={button.id} style={tabStyle}>
                            <Link className='mx-6 font-bold'   onClick={(e) => {
                                e.preventDefault()
                                onButtonClicked(button.id)
                            }}
                            >{button.name}</Link>
                        </li>)
                })
            }
        </ul>

    );
}

function Buttons({ buttons, onButtonClicked, selected, containerStyle, buttonStyle, buttonSelectedStyle }) {
   
    return (
        <div className='flex justify-center flex-wrap' style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <button id='button' key={button.id} className='text-white font-bold py-1 px-4 my-2 mx-2' onClick={() => onButtonClicked(button.id)} style={selected === button.id? buttonSelectedStyle : buttonStyle}>{button.name}</button>
                    )
                })
            }
        </div>
    );
}

function MenuButtons({ buttons, stickButtons = false, renderAs = 'buttons', selected, onButtonClicked, backgroundColor = 'black', textColor = 'white', buttonStyle = {}, buttonSelectedStyle = {} }) {

    useEffect(() => {
        if (stickButtons) {
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
        }

    });

    return (
        <div id='buttomGroup' className='w-full lg:w-1/2 self-center' style={{ backgroundColor: backgroundColor, color: textColor }}>
            {
                renderAs === 'buttons' ?
                    <Buttons buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{ backgroundColor: backgroundColor }} buttonStyle={{ backgroundColor: backgroundColor, color: textColor, ...buttonStyle }} buttonSelectedStyle={buttonSelectedStyle} />
                    :
                    <Tabs buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{ backgroundColor: buttonStyle['background-color'] }} tabStyle={{ backgroundColor: backgroundColor, color: textColor, ...buttonStyle }} />
            }
        </div>
    );
}

export default MenuButtons;