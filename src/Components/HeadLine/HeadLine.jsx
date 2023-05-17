import React from 'react';

//Image
import hamburger2 from "../../assets/hamburger2.jpg";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";

const HeadLine = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
                <div className='w-full h-full absolute rounded-xl bg-black/40 text-white'>
                    <p className='px-2 pt-4 text-2xl font-bold'>Sun'S Out, BOGO'S Out</p>
                    <p className='px-2'>Throgh 8/27</p>
                    <button className='mx-2 border-white bg-white text-black p-2 rounded-[10px] absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={hamburger2} alt="haburger" />
            </div>
            <div className='rounded-xl relative'>
                <div className='w-full h-full absolute rounded-xl bg-black/40 text-white'>
                    <p className='px-2 pt-4 text-2xl font-bold'>Sun'S Out, BOGO'S Out</p>
                    <p className='px-2'>Throgh 8/27</p>
                    <button className='mx-2 border-white bg-white text-black p-2 rounded-[10px] absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={food1} alt="haburger" />
            </div>
            <div className='rounded-xl relative'>
                <div className='w-full h-full absolute rounded-xl bg-black/40 text-white'>
                    <p className='px-2 pt-4 text-2xl font-bold'>New Food</p>
                    <p className='px-2'>Throgh 8/27</p>
                    <button className='mx-2 border-white bg-white text-black p-2 rounded-[10px] absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={food2} alt="haburger" />
            </div>
        </div>
    );
};

export default HeadLine;