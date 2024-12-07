import React, { useState } from 'react'
import Rating from './Rating'

const Filter = () => {

    const[rate, setRate] = useState(3);

  return (
    <div className='bg-gray-400 text-white p-[20px] flex flex-col w-[20%] m-[10px] h-[86vh] sticky top-24'>
        <span className='text-2xl pb-[20px]'>Filter Products</span>
   
            <form className='flex flex-col '>
                <span className='pb-[20px]'>
                <input 
                    type="radio"
                    name='group1'
                    aria-label='Ascending'
                    id='ascending'
                    />
                    <label htmlFor="ascending">Ascending</label>
                </span>
               <span className='pb-[20px]'>
               <input 
                    type="radio"
                    name='group1'
                    aria-label='Descending'
                    id='descending'
                    />

                    <label htmlFor="descending">Descending</label>
               </span>

               <span className='pb-[20px]'>
                <input 
                    type="checkbox"
                    name='group1'
                    id='outstock'
                    />
                    <label htmlFor="outstock">Includes out of stock</label>
               </span>
               <span className='pb-[20px]'>
                <input 
                    type="checkbox"
                    name='group1'
                    id='fastdeslivery'
                    />
                    <label htmlFor="fastdeslivery">Fast Delivery Only</label>
               </span>

               <span className='flex items-center justify-start'>
                <label htmlFor="rating" className='pr-[10px]'>Rating: </label>
                <Rating rating={rate} onClick={(i)=>setRate(i+1)}/>
               </span>

               <button className='w-full bg-white text-black p-2 font-bold'>Clear Filters</button>
            </form>
     
    </div>
  )
}

export default Filter