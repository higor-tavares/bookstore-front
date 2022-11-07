import { ADD_TO_CART } from "../components/actions/actions";

const initialState = {
    items: new Array()
}
const cartReducer = (state = initialState, action) => {
    const item = action.payload
    const items = state.items;
    if(item == null){
        return state;
    }
    items.push(item)
    if(action.type === ADD_TO_CART.type){
        return {
            ...state,
            items: items
        }
    }
    return state;
}

export default cartReducer;