import React, { useEffect } from 'react';

import 'assets/styles/menu-button-group.css';

function Tabs({ buttons, selected, onButtonClicked, style }) {
    return (
        <ul className='flex justify-around'>
            {
                buttons.map(button => {
                    return (
                        <li className='border-b border-solid border-black' active={button.id === selected} key={button.id} style={style}>
                            <a onClick={() => onButtonClicked(button.id)}>{button.name}</a>
                        </li>)
                })
            }
        </ul>

    );
}

function Buttons({ buttons, onButtonClicked, selected, style }) {
    return (
        <div className='flex justify-around bg-white'>
            {
                buttons.map(button => {
                    return (
                        <button id='button' className='bg-blue-500  text-white font-300 py-2 px-4 rounded my-2' onClick={() => onButtonClicked(button.id)} style={style}>{button.name}</button>
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
                    <Buttons buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} style={{ backgroundColor: backgroundColor, color: textColor , ...buttonStyle}}/>
                    :
                    <Tabs buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
            }
        </div>
    );
}

export default MenuButtons;