import React, { useEffect } from 'react';

import 'assets/styles/menu-button-group.css';

function Tabs({ buttons, selected, onButtonClicked }) {
    return (
        <ul className='flex justify-around'>
            {
                buttons.map(button => {
                    return (
                        <li className='border-b border-solid border-black' active={button.id === selected} key={button.id}>
                            <a onClick={() => onButtonClicked(button.id)}>{button.name}</a>
                        </li>)
                })
            }
        </ul>

    );
}

function Buttons({ buttons, onButtonClicked, selected }) {
    return (
        // <Columns centered={true}>
        //     <Button.Group position='centered'>
        //         {
        //             buttons.map(button => {
        //                 return <Button outlined={button.id !== selected} isSelected={button.id === selected} color='primary' key={button.id} onClick={() => onButtonClicked(button.id)}>{button.name}</Button>
        //             })
        //         }
        //     </Button.Group>
        // </Columns>

        null
    );
}

function MenuButtons({ buttons, renderAs = 'buttons', selected, onButtonClicked, containerStyle, buttonStyle }) {

    useEffect(() => {
        const header = document.getElementById("buttomGroup");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("bg-black");
                header.classList.add("text-white");
            } else {
                header.classList.remove("bg-black");
                header.classList.remove("text-white");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div id='buttomGroup' className='fixed w-full mt-20'>
            <div>
                {
                    renderAs === 'buttons' ?
                        <Buttons buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                        : <Tabs buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} />
                }
            </div>
        </div>
    );
}

export default MenuButtons;