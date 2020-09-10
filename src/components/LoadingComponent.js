import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingMenu = ({ image, showImage = false, color }) => {

    return (
        <div className='flex flex-1 flex-col w-full bg-white justify-center items-center'>
            {
                showImage ? <img src={image} alt='logo' className='my-10'></img> : null
            }
            <LoadingOutlined className='animate-pulse my-10' style={{ fontSize: '80px', color: color }} />
        </div>
    )
}

export default LoadingMenu;