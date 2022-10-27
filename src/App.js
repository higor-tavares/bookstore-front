import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
    <Router>
    <Header/> 
    <Container>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </Container>
    </Router>
    {/*  */}
    </div>
  );
}

export default App;
