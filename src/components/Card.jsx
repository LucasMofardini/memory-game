import React from 'react';

const Card = ({ isActive = true, children, ...props }) => {
    return(
        <div className='w-36 h-36 bg-slate-400 rounded-md flex justify-center items-center' {...props} >
            <p className='font-mono text-3xl text-gray-600'>{ isActive ? children : null }</p>
        </div>
    )
}

export default Card;