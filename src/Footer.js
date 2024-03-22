import { Container, Button, Stack } from "react-bootstrap";

function Footer() {
  return (
    <>
      {/* <Container> */}
        {/* <div style={{ textAlign: "center" }}>
          <h7>To place order</h7>
        </div>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} className="mb-4">
            <Button variant="outline-dark">Dark</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} className="mb-4">
            <Button variant="outline-dark">Dark</Button>
          </Col>
        </Row> */}

        <Stack gap={3}>
          <div style={{ textAlign: "center" }}>
            <h7>Place your order now.</h7>
          </div>
          <div style={{ textAlign: "center" }}>
            <Container fluid>
              <Button variant="outline-dark">
                <img
                  alt=""
                  src="/img/telephone.svg"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}
                +91 9876543210
              </Button>{" "}
              <Button variant="outline-dark"><img
                  alt=""
                  src="/img/whatsapp.svg"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}
                +91 9876543210</Button>
            </Container>
          </div>
        </Stack>
      {/* </Container> */}
    </>
  );
}

export default Footer;
