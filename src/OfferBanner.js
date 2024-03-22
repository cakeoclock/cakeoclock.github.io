import { Container, Button, Stack } from "react-bootstrap";

function OfferBanner({offer}) {
  return (
    <>

        {/* <Stack gap={3}> */}
          <div style={{ textAlign: "center", width:"100%", backgroundColor:"gold" }}>
            <h7> {offer} </h7>
          </div>
          {/* <div style={{ textAlign: "center" }}>
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
          </div> */}
        {/* </Stack> */}
    </>
  );
}

export default OfferBanner;
