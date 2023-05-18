import React, { useState } from 'react';

//data
import {data} from "../data";
// console.log(data)
const Food = () => {
    const [foods,setFoods]=useState(data);


    ///Filterd Foods
    const filteredFood=(categury)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===categury
            })
        )
    }

    ///Filtered Price
    const filteredPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price
            })
        )
    }


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h3 className='text-center text-4xl text-orange-400 font-bold'>Top Rated Menu Item</h3>

        {/* {filter row} */}
        <div className='flex flex-col lg:flex-row justify-between'>
            <p className='text-gray-700 font-bold'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>All</button>
                <button onClick={()=>filteredFood("burger")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>Burger</button>
                <button onClick={()=>filteredFood("pizza")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>Pizza</button>
                <button onClick={()=>filteredFood("salad")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>Chiken</button>
                <button  onClick={()=>filteredFood("chiken")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>Salad</button>
            </div>
        </div>
            {/* {Filte Price} */}

            <div>
                <p className='text-gray-700 font-bold'>Filter Price</p>
                <div className='flex max-w-[390px] justify-between w-full'>
                    <button onClick={()=>filteredPrice("$")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>$</button>
                    <button onClick={()=>filteredPrice("$$")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[3px] rounded-xl cursor-pointer transition-all m-1'>$$</button>
                    <button onClick={()=>filteredPrice("$$$")} className='border-orange-600 text-orange-400 font-bold hover:text-white bg-black p-[4px] rounded-xl cursor-pointer transition-all m-1'>$$$</button>
                </div>
            </div>
            {/* {images Food} */}
            <div className='grid grid-cols-3 lg:grid-cols-4 pt-4 gap-6'>
                {foods.map((item,index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-sm rounded-lg' />
                        <div className='flex justify-between pt-4 py-4'>
                            <p className='font-bold text-gray-700'>{item.name}</p>
                            <p className='bg-orange-500 text-white p-1 mr-1 rounded h-fit'>
                                <span>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;