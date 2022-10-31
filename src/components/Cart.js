import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { connect } from 'react-redux'

function Cart ({produtos=[]}) {
  return (
    <Card>
      <Card.Header>Carrinho de compras</Card.Header>
      <Card.Body>
        <Card.Title>Items</Card.Title>
        <ListGroup variant='flush'>
            {produtos.map(p => <ListGroup.Item key={p.id}><b>{p.name} - R$ {p.price}</b></ListGroup.Item>)}
        </ListGroup>
        <Card.Text style={{textAlign:'right'}}><b>Total:</b> R$ 20,90</Card.Text>
        <Button variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
  )
}
const mapStateToProps = (state) => { return  {produtos: state.cartItems}}
export default connect(mapStateToProps)(Cart);
