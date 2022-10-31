import { ADD_TO_CART } from "../components/actions/actions";

const initialState = {
    cartItems: new Array()
}
const rootReducer = (state = initialState, action) => {
    const item = action.payload
    const items = state.cartItems;
    if(item == null){
        return state;
    }
    items.push(item)
    if(action.type === ADD_TO_CART.type){
        return {
            ...state,
            cartItems: items
        }
    }
    return state;
}

export default rootReducer;