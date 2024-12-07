import { FETCH_ACTIONS } from "../actions";

const INITIAL_STATE = {
    product: [],
    loading: false,
    error: null,
}

const productReducer = (state, action)=>{
    switch(action.type){
        case FETCH_ACTIONS.PROGRESS:{
            return{
                ...state,
                loading: true,
                product: [],
                error: false,
            }
        }

        case FETCH_ACTIONS.SUCCESS:{
            return{
                ...state,
                product: action.data,
                loading: false,
            }
        }

        case FETCH_ACTIONS.ERROR:{
            return{
                loading: false,
                error: action.err,
            }
        }

        default:{
            return state;
        }
    }
}

export {INITIAL_STATE, productReducer};