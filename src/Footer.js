import { Container, Button, Stack } from "react-bootstrap";

function Footer() {
  return (
    <>

        <Stack gap={3}>
          <div style={{ textAlign: "center" }}>
            <h7>Place your order now.</h7>
          </div>
          <div style={{ textAlign: "center" }}>
            <Container fluid>
            <a href="tel:+919876543210" style={{ textDecoration: 'none' }}>
              <Button variant="outline-dark">
                <img
                  alt=""
                  src="/img/telephone.svg"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}
                +91 9876543210
              </Button></a>{" "}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="outline-dark"><img
                  alt=""
                  src="/img/whatsapp.svg"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{" "}
                +91 9876543210</Button></a>
            </Container>
          </div>
        </Stack>
    </>
  );
}

export default Footer;
