import { LOAD_PRODUCTS } from "../components/actions/actions";

const initialState = {
    items: new Array()
}
const productsReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_PRODUCTS.type:
            return {
                ...state, 
                items: action.payload
        }
        default:
            return {...state}
    }
}
export default productsReducer;