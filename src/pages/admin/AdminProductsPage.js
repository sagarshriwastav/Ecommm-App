import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
    if (window.confirm("Are you sure?")) alert("Product deleted!")
}
const AdminProductsPage = () => {
    return (
        <Row className="m-5" >
            <Col md={2} >
                <AdminLinksComponent></AdminLinksComponent>
            </Col>
            <Col md={10} >
                <h1>Product List{" "}
                    <LinkContainer to="/admin/create-new-product" >
                        <Button variant="primary" size="lg">Create new</Button>
                    </LinkContainer>
                </h1>
                <Table striped bordered hover responsive >
                    {/* table looks good in mob devices "striped bordered hover responsive"*/}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[{ name: "Panasonic", price: "$385", category: "TV" },
                        { name: "HP", price: "$1000", category: "PC" },
                        { name: "Oppo", price: "$250", category: "Mobile" }].map((item, idx) => (
                            <tr key={idx} >
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <LinkContainer to="/admin/edit-product">
                                        <Button className="btn-sm">
                                            <i className="bi bi-pencil-square" ></i>
                                        </Button>
                                    </LinkContainer>
                                    {" / "}
                                    <Button variant="danger" className="btn-sm" onClick={deleteHandler} >
                                        <i className="bi bi-x-circle" ></i>
                                    </Button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}
export default AdminProductsPage;