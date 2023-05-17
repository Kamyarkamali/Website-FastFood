import React, { useState } from 'react';

//Icons
import {FiAlignJustify} from "react-icons/fi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";
import {BsXLg} from "react-icons/bs";
import {BsFillHeartFill} from "react-icons/bs";
import {BsFillGrid1X2Fill} from "react-icons/bs";
import {BsExclamationCircle} from "react-icons/bs";
import {BsPeople} from "react-icons/bs";
import {BsCreditCard2Back} from "react-icons/bs";

const Navbar = () => {
    const [nav,setNav]=useState(false);
    return (
        <div className='flex items-center mr-auto mx-w-[1640] p-4 justify-between'>
            <div className='flex items-center'>
                <div>
                    <FiAlignJustify onClick={()=>setNav(!nav)} className='cursor-pointer' size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Bsts <span className='font-bold'>East</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='text-white bg-black p-2 rounded-full'>Delivery</p>
            <p className='p-2 rounded-full'>Pickup</p>
                </div>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full w-[200] sm:w-[400] lg:w-[500] px-2'>
                <AiOutlineSearch size={20} className='cursor-pointer'/>
                <input type="text" className="border-none outline-none bg-transparent w-full p-2" />
            </div>
                <button className='bg-black text-white md:flex p-2 rounded-xl items-center'>
                    <BsCart3 size={20} className='mr-2'/> Card
                </button>

        {/* {mobileMenu} */}
        <div className={nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0' : ""}></div>

        <div className={nav ? 'fixed top-0 left-0 w-[300px] bg-white z-10 h-screen duration-300' : 'fixed top-0 left-[-100%]'}>
            <BsXLg onClick={()=>setNav(!nav)} className='absolute top-0 right-0 m-1 cursor-pointer' size={20}/>
            <h2 className='text-2xl'>Best <span className='font-bold'>Eats</span></h2>

        <nav>
            <ul className='flex flex-col text-gray-800 p-4'>
                <li className='flex items-center py-4 text-xl'><BsCreditCard2Back className='m-4' size={25}/>Orders</li>
                <li className='flex items-center py-4'> <BsFillHeartFill className='m-4' size={25}/>Favarite</li>
                <li className='flex items-center py-4'><BsFillGrid1X2Fill className='m-4' size={25}/> Wallet</li>
                <li className='flex items-center py-4'> <BsExclamationCircle className='m-4' size={25}/>Help</li>
                <li className='flex items-center py-4'><BsPeople className='m-4' size={25}/> Invate Ferinds</li>
            </ul>
        </nav>

        </div>

        </div>
    );
};

export default Navbar;