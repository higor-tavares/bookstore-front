import { ADD_TO_CART } from "../components/actions/actions";

const initialState = {
    cartItems: new Array()
}
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART.type:
            const cartItem = action.payload
            const cartItems = state.cartItems;
            if(cartItem == null){
                return state;
            }
            cartItems.push(cartItem)
            return {
                ...state,
                cartItems: cartItems
            }
        default:
            return state; 
    }
}

export default cartReducer;