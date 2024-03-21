import { Container, Row, Col, Card } from "react-bootstrap";

function MenuCard() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
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
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
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
