import { REMOVE_MESSAGE, SUCCESSFULY_ADDED_TO_CART } from "../components/actions/actions";

const initialState = {
    successMessage: false
}
const messageReducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === SUCCESSFULY_ADDED_TO_CART.type){
        return {
            ...state,
            successMessage: true
        }
    }
    if(action.type === REMOVE_MESSAGE.type){
        return {
            ...state,
            successMessage: false
        }
    }
    return state;
}

export default messageReducer;