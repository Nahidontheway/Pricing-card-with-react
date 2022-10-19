import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome feature',
            'Do awesome support',
            'Subcription free'
        ]},
        {id: 2, name: 'Standard', price: '150$', features: [
            '24/4 Support',
            'Techinal Support',
            'Callback Support'
        ]},
        {id: 3, name: 'Premium', price: '200$', features:[
            'Premier Subscription',
            '1 Year Free Service',
            'Technical Support 24/7'
        ]}
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-400 text-white p-20 mt-5'>Best Deal of The Town!</h1>
            <div className='grid md:grid-cols-3 mt-3 gap-3'>
                {
                    pricingOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;