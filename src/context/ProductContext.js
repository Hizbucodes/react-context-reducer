import { createContext, useEffect, useReducer } from "react";
import { INITIAL_STATE, productReducer } from "../reducers/productReducer";
import { FETCH_ACTIONS } from "../actions";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const[state, dispatch] = useReducer(productReducer, INITIAL_STATE);

    const {product, loading, error} = state;

   
    useEffect(()=>{
        dispatch({type: FETCH_ACTIONS.PROGRESS})
        const fetchProducts = async () =>{
            try{
                const response = await fetch("http://localhost:3500/products");
                
                if(response.status === 200){
                    const data = await response.json();
                    dispatch({type: FETCH_ACTIONS.SUCCESS, data: data})
                }
            }catch(err){
                dispatch({type: FETCH_ACTIONS.ERROR, err: err.message})
            }


            
        };

        fetchProducts();
    }, []);

    

    return(
        <ProductContext.Provider value={{product, loading, error}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductContext;