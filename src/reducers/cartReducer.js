import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEMS } from "../components/actions/actions";

const initialState = {
    cartItems: new Array()
}
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART.type:
            const cartItem = action.payload
            const cartItems = state.cartItems;
            cartItems.push(cartItem)
            return {
                ...state,
                cartItems: cartItems
            }
        case SET_CART_ITEMS.type:
            const items = action.payload;
            return {
                ...state,
                cartItems: items
            }
        default:
            return state; 
    }
}

export default cartReducer;