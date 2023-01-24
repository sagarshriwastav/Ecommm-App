import { Container, Row } from "react-bootstrap";
import ProductCarouselComponent from "../components/user/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";

const HomePage = () => {
    const categories = [
        "PC",
        "Tablet",
        "Mobiles",
        "Books",
        "Cameras",
        "Menswear",
        "Womenwear",
        "Games",
    ];
    return (<>
        <ProductCarouselComponent />
        <Container>
            <Row xs={1} md={2} className="g-4 mt-4">
                {categories.map((category, idx) => (<CategoryCardComponent key={idx} category={category} idx={idx} />))}
            </Row>
        </Container>
    </>
    )
}
export default HomePage;