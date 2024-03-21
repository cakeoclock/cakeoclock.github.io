import { COLOR } from "./colors";
import { Container, Navbar } from "react-bootstrap";

function Titlebar() {
  return (
    <>
      <Navbar className="b" style={{ backgroundColor: COLOR.background }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.png"
              width="64"
              height="64"
              className="d-inline-block align-top"
            />{" "}
            Cake O'Clock
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Titlebar;
