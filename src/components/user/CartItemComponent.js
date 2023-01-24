import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";


const CartItemComponenet = () => {
    return (
        // fragment for html <></>
        <>
            <ListGroup.Item>
                <Row>
                    <Col md={2}>
                        <Image crossOrigin="anonymous" src="/images/games-category.png" fluid />
                    </Col>
                    <Col md={2}>
                        Logitech series <br></br>
                        gaming mouse
                    </Col>
                    <Col md={2}>
                        <b>$85</b>
                    </Col>
                    <Col md={3}>
                        <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button type="button" variant="secondary" onClick={() => window.confirm("Are you sure?")}><i className="bi bi-trash"></i></Button>
                    </Col>
                </Row>
            </ListGroup.Item>
            <br></br>
        </>
    )
}

export default CartItemComponenet;