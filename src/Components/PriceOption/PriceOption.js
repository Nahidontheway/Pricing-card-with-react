import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-400 m-5 p-5 rounded-sm'>
            <h1 className='text-3xl text-white font-semibold'>{option.name}</h1>
            <h2 className='text-2xl text-white font-semibold'>{option.price}</h2>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-sky-400 mt-5 px-8 text-white py-2 rounded-sm font-bo'>Purchase Now</button>
        </div>
    );
};

export default PriceOption;