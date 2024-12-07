import React, { useContext } from 'react'
import Rating from './Rating'
import CartContext from '../context/CartContext';
import { CART_ACTIONS } from '../actions';

const SingleProduct = ({product}) => {

  const {state: {cart}, dispatch} = useContext(CartContext);
    console.log(cart);

  return (
    <div className='w-[250px] bg-red-500 flex flex-col gap-8 min-h-[300px] overflow-hidden items-start mx-auto my-2'>
        <div className='w-full'>
            <img src={product.image} className='h-64 mx-auto w-full object-cover aspect-square'/>
        </div>
    <div className='ml-5  flex flex-col gap-5'>
        <div>
            <h1>{product.title}</h1>
        </div>
      <div className='flex'>
      <Rating rating={product.ratings}/>
      </div>

      <div>
      {product.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>4 days Delivery</div>
          )}
      </div>

        <div className='flex'>
          <span>
          Price:  Rs {product.price.split(".")[0]}
          </span>
          <span>
           {cart.some(p=> p.id === product.id) 
           ?
            ( <button onClick={()=>{dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: product})}} className='bg-red-100 p-2'>Remove from Cart</button>) 
           :
           (<button onClick={()=>{dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: product})}} disabled={product.inStock===0} className='bg-blue-100 p-2'>{product.inStock===0 ? "Out of Stock" : "Add to Cart"}</button>)}
           
            
          </span>
        </div>
        </div>
    </div>
  )
}

export default SingleProduct