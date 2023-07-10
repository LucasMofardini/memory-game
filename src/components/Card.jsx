import React from 'react';

const Card = ({ children }) => {
    return(
        <div className='w-36 h-36 bg-slate-400 rounded-md flex justify-center items-center'>
            <p className='font-mono text-3xl text-gray-600'>{children}</p>
        </div>
    )
}

export default Card;