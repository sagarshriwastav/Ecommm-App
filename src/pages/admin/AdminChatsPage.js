import { Row, Col } from "react-bootstrap";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminChatsPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent></AdminLinksComponent>
            </Col>
            <Col md={10}>
                <Row>
                    <AdminChatRoomComponent></AdminChatRoomComponent>
                </Row>
            </Col>
        </Row>
    )
}
export default AdminChatsPage;