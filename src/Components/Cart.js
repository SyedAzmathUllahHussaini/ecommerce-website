import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap"
import {FaCartArrowDown} from "react-icons/fa"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount= parseFloat(amount) + parseFloat(item.productPrice)
        });
  return(
      <Container fluid >
        <h1 className="text-white mx-5 mt-2">YOUR CART</h1>
        <ListGroup>
            {cartItem.map(item => (
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col>
                        <img height={80} src={item.tinyImage}/>
                        </Col>
                        <Col className="text-center" >
                            <div className="text-dark">
                                {item.productName}
                            </div>
                            <span >price:-{item.productPrice}</span>
                            <Button color="danger mx-2 mt-2" onClick={()=> removeItem(item)}>Remove</Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
        {/* if everthing is Empty */}
        {
            cartItem.length >= 1 ?(
                <Card className="text-center mt-3" >
                    <CardHeader> Grand Total</CardHeader>
                    <CardBody>Your Amount for {cartItem.length} is {amount} </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow}>Pay Here</Button>
                    </CardFooter>
                </Card>
            ):(
                <h1 className="text-white mt-5 mx-5"> YOUR CART IS EMPTY</h1>
            )
        }
        
    </Container>

  )

}

export default Cart;

