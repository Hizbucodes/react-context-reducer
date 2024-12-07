import { CART_ACTIONS } from "../actions";

const INITIAL_STATE = {
    cart: [],
}

const cartReducer = (state, action) => {
    switch(action.type){
        case CART_ACTIONS.ADD_TO_CART:{
            return{
                ...state,
                cart: [...state.cart, {...action.payload, qty: 1}]
            }
        }

        case CART_ACTIONS.REMOVE_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((c)=> c.id !== action.payload.id),
            }
        }

        default:{
            return state
        }
    }
};



export {INITIAL_STATE, cartReducer};