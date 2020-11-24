import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingMenu = ({ image, showImage = false, color }) => {
  return (
    <div className="h-screen flex flex-1 flex-col w-full bg-white justify-center items-center">
      {/* {
                showImage ? <img src={image} alt='logo' className='my-10 lg:w-1/4'></img> : null
            } */}
      <LoadingOutlined
        className="animate-pulse my-10"
        style={{ fontSize: '80px', color: color }}
      />
    </div>
  );
};

LoadingMenu.propTypes = {
  image: PropTypes.string,
  showImage: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

export default LoadingMenu;
