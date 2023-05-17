import React from 'react';

//Image
import hamburger from "../../assets/hamburger.jpg";

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto py-2'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-50 bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>Devlivered <span className='text-orange-500'>Foods</span></h1>
                </div>
                <img className='w-full object-cover max-h-[500px]' src={hamburger} alt="hamburger" />
            </div>
        </div>
    );
};

export default Hero;