import React from 'react';

//data
import {categoriy} from "../data";

const Catigry = () => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Resturant</h1>

        <div className='grid grid-cols-2 md:grid-cols-4'>
            {categoriy.map((item,index)=>(
                <div key={index} className='flex bg-gray-100 shadow-md gap-6 py-4 mt-3 m-1 justify-center items-center hover:scale-110 duration-300'> 
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>

        </div>
    );
};

export default Catigry;