import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { connect } from 'react-redux'
import integerToCurrency from '../utils/CurrencyUtil'

function Cart ({produtos=[]}) {
  return (
    <Card>
      <Card.Header>Carrinho de compras</Card.Header>
      <Card.Body>
        <Card.Title>Items</Card.Title>
        <ListGroup variant='flush'>
            {produtos.map(p => <ListGroup.Item style={style} key={p.id}><div>{p.name}</div> <div>{integerToCurrency(p.price)}</div></ListGroup.Item>)}
        </ListGroup>
        <Card.Text style={{textAlign:'right',  fontWeight: 'bold'}}>Total:{integerToCurrency(produtos.reduce((total,p)=>total += p.price,0))}</Card.Text>
        <Button variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
  )
}
const mapStateToProps = (state) => { 
  console.log(state);
  return  {produtos: state.cart.items}
}
const style = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold'
};

export default connect(mapStateToProps)(Cart);
