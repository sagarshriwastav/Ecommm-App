import { Container, Row, Col, Alert, Form, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import CartItemComponenet from "../../components/user/CartItemComponent";

const UserOrderDetailsPage = () => {
    return (
        <Container fluid >
            <Row className="mt-4" >
                <h1>Order Details</h1>
                <Col md={8}>
                    <br></br>
                    <Row>
                        <Col md={6}><h2>Shipping</h2>
                            <b>Name</b>: Rohit <br></br>
                            <b>Adress</b>: Salt lake city Kolkata<br></br>
                            <b>Phone</b>: 888 777 6666
                        </Col>
                        <Col md={6}><h2>Payment method</h2>
                            <Form.Select disabled={false} >
                                <option value="pp">
                                    PayPal
                                </option>
                                <option value="cod">
                                    Cash on Delivery(delivery may be delayed)
                                </option>
                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className="mt-3" variant="danger">
                                    Not delivered
                                </Alert>
                            </Col>
                            <Col>
                                <Alert className="mt-3" variant="success">
                                    Paid 01-10-2022
                                </Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br></br>
                    <h2>Order items</h2>
                    <ListGroup variant="flush" >
                        {Array.from({ length: 3 }).map((item, idx) => (
                            <CartItemComponenet key={idx} ></CartItemComponenet>))}
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem>
                            <h3>Order summary</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            Items price (tax including): <span className="fw-bold">$385</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Shipping : <span className="fw-bold">included</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Tax : <span className="fw-bold">included</span>
                        </ListGroupItem>
                        <ListGroupItem className="text-danger" >
                            Total price : <span className="fw-bold">$530</span>
                        </ListGroupItem>
                        <ListGroupItem  >
                            <div className="d-grid gap-2">
                                <Button type="button" variant="danger" size="lg" >
                                    Pay for the order
                                </Button>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default UserOrderDetailsPage;