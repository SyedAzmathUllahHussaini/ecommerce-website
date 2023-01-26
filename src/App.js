import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import "react-toastify/dist/.css"
import "react-toastify/ReactToastify.css"
import "react-icons"
import './App.css';
import { ToastContainer, toast} from 'react-toastify';
import{Container, Row, Col} from "reactstrap";
import { type } from '@testing-library/user-event/dist/type';
import BuyPage from './Components/BuyPage';
import Cart  from './Components/Cart';

function App() {
const [cartItem, setCardItem] = useState([]);

const addInCart = item => {
  const isAlreadyAdded = cartItem.findIndex(function (array) {
    return array.id === item.id
  })
  if (isAlreadyAdded !== -1) {
    toast("already added in Your Card",{ type:"error"})
    return;
  }
  

  setCardItem([...cartItem, item])
 };
 const buyNow = () => {
  setCardItem([])
  toast("Purchase Completed", {type:'success'})
 };
  const removeItem = item => {
    setCardItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  };

  return (
  <Container fluid>
    <ToastContainer/>
    <Row>
      <Col md="8">
         <BuyPage addInCart={addInCart}/>
      </Col>
      <Col md="4">
        <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
