import { Container, Row, Col, Card } from "react-bootstrap";

function MenuCard() {
  const items = [
    { id: 1, name: "Item 1", image: "img/c1.jpg" },
    { id: 2, name: "Item 2", image: "img/c2.jpg" },
    { id: 3, name: "Item 3", image: "img/c1.jpg" },
    { id: 4, name: "Item 4", image: "img/c2.jpg" },
    { id: 5, name: "Item 5", image: "img/c1.jpg" },
    { id: 6, name: "Item 6", image: "img/c2.jpg" },
    { id: 7, name: "Item 7", image: "img/c1.jpg" },
    { id: 8, name: "Item 8", image: "img/c2.jpg" },
    { id: 9, name: "Item 9", image: "img/c1.jpg" },
  ];
  return (
    <>
      <Container>
        <Row>
          {items.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{width:"100%", height:"200px", objectFit:"cover"}}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>₹{product.price}</Card.Text>
                  {/* Add more details or buttons here */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MenuCard;
