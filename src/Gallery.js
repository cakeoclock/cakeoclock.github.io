import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import images from "./galleryImages";
import React, { useState } from "react";

function Gallery() {

  const [showDetails, setShowDetails] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = (productData) => {
    setShowDetails(true);
    setProductDetails(productData);
  };

  return (
    <>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col xs={6} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Image
                src={`/gallery/${image}`}
                alt={`Gallery ${index}`}
                style={{ width: "100%", height: "200px", objectFit: "cover" }} 
                rounded
                onClick={() => handleShowDetails(image)}
              />
            </Col>
          ))}
        </Row>

        {/* <p style={{ textAlign: "center" }}>
          Home delivery available. Delivery charge (₹30 - ₹50) according to
          distance or free take away.
        </p> */}
      </Container>
      <Modal
        show={showDetails}
        onHide={handleCloseDetails}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            {productDetails.name}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Image
            variant="top"
            src={`/gallery/${productDetails}`}
            alt={productDetails}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
