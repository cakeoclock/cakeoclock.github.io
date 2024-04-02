import { COLOR } from "./colors";
import { Container, Navbar } from "react-bootstrap";

function Titlebar() {
  return (
    <>
      {/* <Navbar style={{ backgroundColor: "COLOR.background" }}> */}{" "}
      <Container className="d-flex justify-content-start align-items-center">
        {/* <img
            alt="Logo"
            src="/img/logo.png"
            width="64"
            height="64"
            className="me-2" // Adjust 'me-2' for more or less spacing
          /> */}
        <div>
          <h2 className="mb-0" style={{ color: COLOR.primary }}>
            Welcome to Cake O'Clock!
          </h2>{" "}
          {/* No bottom margin for tight spacing */}
          <h6 className="mt-0" style={{ color: COLOR.primary }}>
            Home-made, Eggless, and Delicious Cakes.
          </h6>{" "}
          {/* No top margin for tight spacing */}
        </div>
      </Container>
      {/* </Navbar> */}
    </>
  );
}

export default Titlebar;
