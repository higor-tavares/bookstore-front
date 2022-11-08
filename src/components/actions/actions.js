import axios from 'axios';
import { useSelector } from 'react-redux';
export const ADD_TO_CART = {type: 'ADD_TO_CART'};
export const SUCCESSFULY_ADDED_TO_CART = {type: 'SUCCESSFULY_ADDED_TO_CART'};
export const REMOVE_MESSAGE = {type:'REMOVE_MESSAGE'};
export const LOAD_PRODUCTS = {type: 'LOAD_PRODUCTS'}
export const HIDE_MODAL = {type: 'HIDE_MODAL'}
export const SHOW_MODAL = {type: 'SHOW_MODAL'}
export const SET_CART_ITEMS = {type: 'SET_CART_ITEMS'}

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/products/').then(({data})=>{
            dispatch({type: LOAD_PRODUCTS.type ,payload: data});
        })
    }
}
export const removeFromCart = (item) => {
    return   (dispatch, getState) => {
        const items = getState().cart.cartItems;
        console.log(getState())
        console.log(items)
        const index = items.findIndex((i) => i.id === item.id)
        items.splice(index,1)
        dispatch({type: SET_CART_ITEMS.type, payload: items})
    }
}