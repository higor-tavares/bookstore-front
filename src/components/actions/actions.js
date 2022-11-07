import axios from 'axios';
export const ADD_TO_CART = {type: 'ADD_TO_CART'};
export const SUCCESSFULY_ADDED_TO_CART = {type: 'SUCCESSFULY_ADDED_TO_CART'};
export const REMOVE_MESSAGE = {type:'REMOVE_MESSAGE'};
export const LOAD_PRODUCTS = {type: 'LOAD_PRODUCTS'}

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/products/').then(({data})=>{
            dispatch({type: LOAD_PRODUCTS.type ,payload: data});
        })
    }
}