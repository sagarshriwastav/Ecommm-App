import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer"
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="images\carousel\carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>

          <LinkContainer style={cursorP} to="/product-details">
            <h3>BestSeller in Laptops Category</h3>
          </LinkContainer>
          <p>HP 14s DR2006TU, i5, 14 inch HD  512GB SSD.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="images\carousel\carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>BestSeller in Books Category</h3>
          </LinkContainer>
          <p>DSA with C/C++ (Introduction to Algorithms by Thomas H. Cormen).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="images\carousel\carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>BestSeller in Camera's Lens Category</h3>
          </LinkContainer>
          <p>
            Canon Digital Camera EOS R6(IN)BODY With Mount Adapter EF-EOS R & Canon 3 Way Bag.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarouselComponent;