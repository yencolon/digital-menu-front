import React, { useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

function Tabs ({ buttons, selected, onButtonClicked, containerStyle, tabStyle }) {
    return (
        <ul className='flex justify-center flex-wrap' style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <li className='border-b border-solid border-black' active={button.id === selected} key={button.id} style={tabStyle}>
                            <Link className='mx-6 font-bold' onClick={(e) => {
                                e.preventDefault();
                                onButtonClicked(button.id);
                            }}
                            >{button.title}</Link>
                        </li>);
                })
            }
        </ul>

    );
}

Tabs.propTypes = {
    buttons: PropTypes.arrayOf(object).isRequired,
    selected: PropTypes.bool,
    onButtonClicked: PropTypes.func,
    containerStyle: PropTypes.object,
    tabStyle: PropTypes.object
};

function Buttons ({ buttons, onButtonClicked, selected, containerStyle, buttonStyle, buttonSelectedStyle }) {
    return (
        <div className={'flex justify-center flex-wrap'} style={containerStyle}>
            {
                buttons.map(button => {
                    return (
                        <button id='button' key={button.id} className={`text-white font-bold py-1 px-4 my-2 mx-2`} onClick={() => onButtonClicked(button.id)} style={selected === button.id ? buttonSelectedStyle : buttonStyle}>{button.title}</button>
                    );
                })
            }
        </div>
    );
}

Buttons.propTypes = {
    buttons: PropTypes.arrayOf(object).isRequired,
    selected: PropTypes.bool,
    onButtonClicked: PropTypes.func,
    containerStyle: PropTypes.object,
    tabStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    buttonSelectedStyle: PropTypes.object
};

function MenuButtons ({ buttons, stickButtons = false, renderAs = 'buttons', selected, onButtonClicked, backgroundColor = 'black', textColor = 'white', buttonStyle = {}, buttonSelectedStyle = {} }) {
    useEffect(() => {
        if (stickButtons) {
            const header = document.getElementById('buttomGroup');
            const sticky = header.offsetTop + 70;
            const scrollCallBack = window.addEventListener('scroll', () => {
                if (window.pageYOffset > sticky) {
                    header.classList.add('fixed');
                    header.classList.add('top-0');
                    header.classList.add('w-full');
                    header.classList.add('z-30');
                } else {
                    header.classList.remove('fixed');
                }
            });
            return () => {
                window.removeEventListener('scroll', scrollCallBack);
            };
        }
    });
    console.log(backgroundColor);
    console.log(textColor);
    return (
        <div id='buttomGroup' style={ { background: 'white' } }>
            {
                renderAs === 'buttons'
                    ? <Buttons buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{ backgroundColor: backgroundColor }} buttonStyle={{ backgroundColor: backgroundColor, color: textColor, ...buttonStyle }} buttonSelectedStyle={buttonSelectedStyle} />
                    : <Tabs buttons={buttons} selected={selected} onButtonClicked={onButtonClicked} containerStyle={{ backgroundColor: buttonStyle['background-color'] }} tabStyle={{ backgroundColor: backgroundColor, color: textColor, ...buttonStyle }} />
            }
        </div>
    );
}

MenuButtons.propTypes = {
    buttons: PropTypes.arrayOf(object),
    stickButtons: PropTypes.bool,
    renderAs: PropTypes.oneOf(['buttons', 'tabs']),
    selected: PropTypes.bool,
    onButtonClicked: PropTypes.func,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    buttonStyle: PropTypes.object,
    buttonSelectedStyle: PropTypes.object
};

export default MenuButtons;
