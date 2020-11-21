import React from 'react';
import PropTypes from 'prop-types';
import { DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useThemeState } from 'context/MenuThemeContext';
function MenuNavigation({
  match,
  containerStyle,
  itemStyle,
  hasDelivery = true,
}) {
  const { url } = useRouteMatch();
  const theme = useThemeState();
  return (
    <nav
      className="bottom-0 fixed w-full lg:hidden flex items-center justify-around flex-wrap p-2 text-white"
      style={containerStyle}
    >
      <NavLink
        to={`${url}`}
        className="flex flex-col text-sm w-3/12 text-center items-center justify-center font-bold"
      >
        {/* <HomeOutlined style={{ fontSize: '20px' }} /> */}
        <Rest />
        Menú
      </NavLink>

      <NavLink
        to={`${url}/payments`}
        className="flex flex-col text-sm w-3/12 text-center items-center justify-center font-bold"
      >
        <DollarOutlined style={{ fontSize: '20px' }} />
        Pagos
      </NavLink>

      {hasDelivery ? (
        <NavLink
          to={`${url}/delivery`}
          className="flex flex-col text-sm w-3/12 text-center items-center justify-center font-bold"
        >
          {/* <CarOutlined style={{ fontSize: '20px' }}  */}
          <Van width="20px" height="20px" fill="white" y />
          {/* <Icon component={MotoBike} style={{ fontSize: '20px' }}/> */}
          Delivery
        </NavLink>
      ) : null}

      <NavLink
        to={`${url}/contact`}
        className="flex flex-col text-sm w-3/12 text-center items-center justify-center font-bold"
      >
        {}
        {theme.assets.icon ? (
          <>
            {' '}
            <img
              src={theme.assets.icon}
              height={20}
              width={20}
            /> Contactos{' '}
          </>
        ) : (
          <>
            {' '}
            <ClockCircleOutlined style={{ fontSize: '20px' }} /> Contactos{' '}
          </>
        )}
      </NavLink>
    </nav>
  );
}

MenuNavigation.propTypes = {
  match: PropTypes.object,
  containerStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  hasDelivery: PropTypes.bool,
};

export default MenuNavigation;

function Van(props) {
  return (
    <svg viewBox="0 0 68 48.75" fill="white" width={20} height={20} {...props}>
      <g fillRule="evenodd">
        <path d="M4 31a8 8 0 1116 0 8 8 0 01-16 0zm12 0a4 4 0 10-8 0 4 4 0 008 0zM48 31a8 8 0 1116 0 8 8 0 01-16 0zm12 0a4 4 0 10-8 0 4 4 0 008 0z" />
        <path d="M50 30a2 2 0 110 4H18a2 2 0 110-4h32z" />
        <path d="M63 0H25c-2.838 0-6.298 1.731-8 4l-6.394 8.525-6.479 4.544C1.784 18.71 0 22.14 0 25.002V32a2 2 0 002 2h4.123a2 2 0 100-4H4v-4.998c0-1.558 1.148-3.764 2.421-4.656l6.726-4.708a2 2 0 00.453-.438l6.6-8.8C21.146 5.138 23.422 4 25 4h36.3L64 21.16V30h-2a2 2 0 100 4h4a2 2 0 002-2V21a2 2 0 00-.024-.312l-2.64-16.716A2 2 0 0065 0h-2z" />
        <path d="M26 14c1.214 0 2.414-1.04 2.585-2.239L30.02 1.717a2 2 0 013.96.566l-1.435 10.044C32.092 15.496 29.204 18 26.001 18H10a2 2 0 110-4h16z" />
      </g>
    </svg>
  );
}

function Rest(props) {
  return (
    <svg
      viewBox="-949 951 100 125"
      fill="white"
      width={25}
      height={20}
      {...props}
    >
      <switch>
        <g>
          <path d="M-931.3 1039.8c-1.1 1.5-.7 3.6.9 4.6l5.5 3.5c1.6 1 3.7.5 4.6-1.1l16.6-29-5.2-9-22.4 31zM-863.4 963.5l-2.2-1.4c-.3-.2-.7-.1-.9.2 0 0-10.9 16.2-13.5 20.1-.3.5-.9.6-1.4.3-.3-.2-.6-.4-.8-.5-.5-.3-.6-.9-.3-1.4l12.7-20.6c.2-.3.1-.7-.2-.9l-2.2-1.4c-.3-.2-.7-.1-.9.2 0 0-10.9 16.2-13.5 20.1-.3.5-.9.6-1.4.3-.3-.2-.6-.4-.8-.5-.5-.3-.6-.9-.3-1.4l12.7-20.6c.2-.3.1-.7-.2-.9l-2.2-1.4c-.3-.2-.7-.1-.9.2l-13.7 20.3-1.6 2.5c-1.7 2.6-2.3 5.6-1.8 8.2l1.2 5.4-1.7 2.3 4.4 6.1 2.8-4.8 5.5-1.1c2.5-.5 5-2.4 6.7-5l1.6-2.5 12.9-20.9c.3-.4.2-.7 0-.9z" />
          <path d="M-904.9 990.9l-23.8-37c-1.6-2.5-10 8.3-4 20.2 6 11.9 9.3 18.5 11.4 22.6 2.1 4.1 7 5.9 11.4 3.8l1.8-.8 27 47.1c1 1.7 3.1 2.2 4.7 1.2l5.7-3.7c1.6-1 2-3.2.9-4.8l-35.1-48.6z" />
        </g>
      </switch>
    </svg>
  );
}
