import React, { useContext, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Rating from './Rating';
import { FaTrash } from "react-icons/fa6";
import { CART_ACTIONS } from '../actions';

const Header = () => {

    const[toggle, setIsToggle] = useState(false);

    const {state: {cart}, dispatch} = useContext(CartContext)

  return (
    <>
    <header className='flex bg-gray-600 justify-between p-5 w-full text-white items-center px-8 fixed top-0 left-0 right-0'>
       <Link to='/'>
       <div className="font-bold text-2xl" >
                <h2>Shopping Cart</h2>
        </div>
       </Link>

        <div className='text-black'>
            <input 
            type="search"
            placeholder='Search a product'
            className=' w-[500px] p-2 focus:outline-none'
            
            />
        </div>

        <div onClick={()=> setIsToggle(!toggle)} className='cursor-pointer'>
        <FaCartShopping size={25} className='font-bold relative'/>
            <div className='bg-red-500 rounded-[50%] flex items-center justify-center absolute top-3 right-5 px-2'>{cart.length}</div>
            
            
        </div>
        
    </header>
    {toggle && (
        <div className='bg-white border-black border-2 fixed right-10 top-14 p-5 w-80 h-[50vh] overflow-y-scroll py-8'>
        {cart.length>0 ? (
           <>
            {
              cart.map((prod)=>(
                <div className='w-full flex justify-between h-[200px] overflow-hidden items-center  my-0 '>

           <div className='w-[50px] h-[50px] '>
               <img src={prod.image} className='object-cover rounded-lg'/>
           </div>
       <div className='ml-5  flex flex-col gap-5'>
           <div>
               <h1>{prod.title}</h1>
           </div>
         <div className='flex'>
         <Rating rating={prod.ratings}/>
         </div>
   
         <div>
         {prod.fastDelivery ? (
               <div>Fast Delivery</div>
             ) : (
               <div>4 days Delivery</div>
             )}
         </div>
   
           <div className='flex'>
             <span>
             Price:  Rs {prod.price.split(".")[0]}
             </span>
             <span>
              
              
               
             </span>
           </div>
           </div>
           <FaTrash onClick={()=> {dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: prod})}}/>
       </div>
              ))
            }
           </>
        ) 
        :
         (<span>Cart is Empty</span>)}
        
    </div>
    )}
    </>
  )
}

export default Header