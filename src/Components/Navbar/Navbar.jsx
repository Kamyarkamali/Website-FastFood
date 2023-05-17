import React from 'react';

//Icons
import {FiAlignJustify} from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='flex items-center mx-w-[1640] p-4 justify-between'>
            <div className='flex items-center'>
                <div>
                    <FiAlignJustify className='cursor-pointer' size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Bsts <span className='font-bold'>East</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p>Delivery</p>
            <p>Pickup</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;