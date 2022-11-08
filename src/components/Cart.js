import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import {useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import integerToCurrency from '../utils/CurrencyUtil'
import { SHOW_MODAL } from './actions/actions'
import DeleteFromCartModal from "./DeleteFromCartModal";
function Cart () {

  const cartItems = useSelector(state => state.cart.cartItems);
  const [selectedCart, setSelectedCart] =  useState({});
  const dispach = useDispatch()

  return (
    <>
    <DeleteFromCartModal item={selectedCart}/>
    <Card>
      <Card.Header>Carrinho de compras</Card.Header>
      <Card.Body>
        <Card.Title>Items</Card.Title>
        <ListGroup variant='flush'>
            {cartItems.map(p => 
              <ListGroup.Item style={style} key={p.id} onClick={()=>{
                setSelectedCart(p)
                dispach(SHOW_MODAL)
              }}><div>{p.name}</div> <div>{integerToCurrency(p.price)}</div></ListGroup.Item>
              )
            }
        </ListGroup>
        <Card.Text style={{textAlign:'right',  fontWeight: 'bold'}}>Total:{integerToCurrency(cartItems.reduce((total,p)=>total += p.price,0))}</Card.Text>
        <Button variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
    </>
  )
}
const style = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold'
};

export default Cart;
