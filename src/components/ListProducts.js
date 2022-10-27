import React from "react";
import { useState , useEffect} from "react";
import { Card,Button, Row , Col, Container} from "react-bootstrap";
const ListProducts = () => {

    const [products, setProducts] =  useState(Array.from([]));

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
        <h3>PRODUTOS:</h3>
        <br/>
        <Container>
        <Row xs={2} md={3} lg={3}>
        {
        products.map((product) => {
        return (<Col key={product.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Card.Footer >
          <span>R$ {product.price/100}   </span>
          <Button  variant="primary">add to cart</Button> 
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