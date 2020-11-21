import React, { useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { useThemeState } from 'context/MenuThemeContext';

function Tabs({
  buttons,
  selected,
  onButtonClicked,
  containerStyle,
  tabStyle,
}) {
  return (
    <ul className="flex justify-center flex-wrap" style={containerStyle}>
      {buttons.map((button) => {
        return (
          <li
            className="border-b border-solid border-black"
            active={button.id === selected}
            key={button.id}
            style={tabStyle}
          >
            <Link
              className="mx-6 font-bold"
              onClick={(e) => {
                e.preventDefault();
                onButtonClicked(button.id);
              }}
            >
              {button.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

Tabs.propTypes = {
  buttons: PropTypes.arrayOf(object).isRequired,
  selected: PropTypes.bool,
  onButtonClicked: PropTypes.func,
  containerStyle: PropTypes.object,
  tabStyle: PropTypes.object,
};

function Buttons({
  buttons,
  onButtonClicked,
  selected,
  containerStyle,
  buttonStyle,
  buttonSelectedStyle,
}) {
  return (
    <div
      className={'flex flex-row justify-center flex-wrap px-5'}
      style={containerStyle}
    >
      {buttons.map((button) => {
        return (
          <button
            id="button"
            key={button.id}
            className={
              'text-white font-bold py-1 px-4 my-2 mx-2 focus:outline-none'
            }
            onClick={() => onButtonClicked(button.id)}
            style={selected === button.id ? buttonSelectedStyle : buttonStyle}
          >
            {button.title}
          </button>
        );
      })}
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
  buttonSelectedStyle: PropTypes.object,
};

function MenuButtons({ buttons, onButtonClicked, selected }) {
  const theme = useThemeState();
  useEffect(() => {
    if (!theme.booleans.stickButtonsMenu) return;
    const header = document.getElementById('buttomGroup');
    const sticky = header.offsetTop + 10;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
        header.classList.add('top-0');
        header.classList.remove('mt-2');
        if (theme.booleans.stickNavBar) header.classList.add('mt-20');
        header.classList.add('w-full');
        header.classList.add('z-30');
      } else {
        header.classList.remove('fixed');
        header.classList.remove('top-0');
        header.classList.add('mt-2');
        if (theme.booleans.stickNavBar) header.classList.remove('mt-20');
        header.classList.remove('w-full');
        header.classList.remove('z-30');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [
    theme.booleans.stickButtons,
    theme.booleans.stickButtonsMenu,
    theme.booleans.stickNavBar,
  ]);

  return (
    <div id="buttomGroup" className="mt-2">
      {theme.literals.showCategoryButtonsAs === 'buttons' ? (
        <Buttons
          buttons={buttons}
          selected={selected}
          onButtonClicked={onButtonClicked}
          containerStyle={{
            backgroundColor: theme.colors.categoryButtonBackground,
          }}
          buttonStyle={{
            backgroundColor: theme.colors.backgroundColor,
            color: theme.colors.secondaryColor,
            ...theme.menu.buttons.categoryButtonStyle,
          }}
          buttonSelectedStyle={theme.menu.buttons.categoryButtonSelectedStyle}
        />
      ) : (
        <Tabs
          buttons={buttons}
          selected={selected}
          onButtonClicked={onButtonClicked}
          containerStyle={{
            backgroundColor:
              theme.menu.buttons.categoryButtonStyle['background-color'],
          }}
          tabStyle={{
            backgroundColor: theme.colors.categoryButtonBackground,
            color: 'white',
            ...theme.menu.buttons.categoryButtonStyle,
          }}
        />
      )}
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
  buttonSelectedStyle: PropTypes.object,
};

export default MenuButtons;
