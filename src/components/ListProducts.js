import React from "react";
import { useState , useEffect} from "react";
import { Card,Button, Row , Col, Container} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_MESSAGE, SUCCESSFULY_ADDED_TO_CART } from "./actions/actions";
import integerToCurrency from "../utils/CurrencyUtil";

const ListProducts = () => {

    const [products, setProducts] =  useState(Array.from([]));
    const dispach = useDispatch()
    const addToCart = (item) => {
      dispach({type: ADD_TO_CART.type, payload: item });
      dispach({type: SUCCESSFULY_ADDED_TO_CART.type})
      setTimeout(()=>{dispach({type: REMOVE_MESSAGE.type})}, 2000);
    }
    useEffect(() => {
        fetchData();
      }, []);
      
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:8080/products/"
        );
        const jsonData = await response.json();
        setProducts(jsonData);
      };
    return (
    <div>
        <h3 style={{fontSize: 18, margin: 16, fontWeight:'bold'}}>PRODUTOS:</h3>
        <br/>
        <Container>
        <Row xs={2} md={3} lg={3}>
        {
        products.map((product) => {
        return (<Col key={product.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.photo} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text style={{height: '100px', overflow:'scroll'}}>
           {product.description}
          </Card.Text>
          <Card.Footer style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{alignSelf: 'flex-start', fontWeight:'bold'}}>{integerToCurrency(product.price)}   </div>
          <div style={{alignSelf: 'flex-end'}}><Button  variant="primary" onClick={() => addToCart(product)}>add to cart</Button></div> 
          </Card.Footer>
        </Card.Body>
      </Card>
     </Col>)
    })}
     </Row>
   
    </Container>
    </div>
    );
}

export default ListProducts;