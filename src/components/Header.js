import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" align="right">
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" style={{textAlign:"center"}}><FontAwesomeIcon icon={faHome}/> <br/>Home</Nav.Link>
          <Nav.Link as={Link}to="cart" style={{textAlign:"center"}}><FontAwesomeIcon icon={faCartShopping} /><br/>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;