import { HIDE_MODAL, SHOW_MODAL } from "../components/actions/actions";

const initialState = {
    show: false
};

const modalReducer = (state=initialState, action) => {
    switch(action.type){
        case HIDE_MODAL.type: 
            return {...state, show:false}
        case SHOW_MODAL.type:
            return {...state, show:true}
        default:
            return state;
    }
}
export default modalReducer;