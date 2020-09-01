import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingMenu = ({color}) => {

    return(
        <div className='flex flex-1 w-full bg-white justify-center items-center'>
            <LoadingOutlined style={{ fontSize: '80px', color:color }} />
        </div>
    )
}

export default LoadingMenu;