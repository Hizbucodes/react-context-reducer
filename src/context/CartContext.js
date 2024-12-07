import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { INITIAL_STATE } from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const[state, dispatch] = useReducer(cartReducer,INITIAL_STATE);
   
  
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;