import { Container, Row, Col } from "react-bootstrap";
import images from "./galleryImages";

function Gallery() {
  return (
    <>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col xs={6} md={4} lg={3} key={index} className="mb-4">
              <img
                src={`/gallery/${image}`}
                alt={`Gallery ${index}`}
                style={{ width: "100%", height: "200px" }}
              />
            </Col>
          ))}
        </Row>

        <p style={{ textAlign: "center" }}>
          Home delivery available. Delivery charge (₹30 - ₹50) according to
          distance or free take away.
        </p>
      </Container>
    </>
  );
}

export default Gallery;
