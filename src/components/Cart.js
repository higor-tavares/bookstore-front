import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import {useSelector } from 'react-redux'
import integerToCurrency from '../utils/CurrencyUtil'

function Cart () {

  const cartItems = useSelector((state)=>state.cart.cartItems);
  
  return (
    <Card>
      <Card.Header>Carrinho de compras</Card.Header>
      <Card.Body>
        <Card.Title>Items</Card.Title>
        <ListGroup variant='flush'>
            {cartItems.map(p => <ListGroup.Item style={style} key={p.id}><div>{p.name}</div> <div>{integerToCurrency(p.price)}</div></ListGroup.Item>)}
        </ListGroup>
        <Card.Text style={{textAlign:'right',  fontWeight: 'bold'}}>Total:{integerToCurrency(cartItems.reduce((total,p)=>total += p.price,0))}</Card.Text>
        <Button variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
  )
}
const style = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold'
};

export default Cart;
