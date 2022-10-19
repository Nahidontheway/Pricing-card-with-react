import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mt-1'>
            <CheckCircleIcon className="h-6 w-6"/>
            <p className='ml-2 text-white mt-1'>{feature}</p>
        </div>
    );
};

export default Feature;