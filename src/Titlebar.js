import { COLOR } from "./colors";
import { Container, Navbar, Stack } from "react-bootstrap";

function Titlebar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "COLOR.background" }}>
        {" "}
        <Container className="d-flex justify-content-start align-items-center">
          <img
            alt="Logo"
            src="/img/logo.png"
            width="64"
            height="64"
            className="me-2" // Adjust 'me-2' for more or less spacing
          />
          <div>
            <h1 className="mb-0" style={{ color: COLOR.primary }}>
              Cake O'Clock
            </h1>{" "}
            {/* No bottom margin for tight spacing */}
            <h4 className="mt-0" style={{ color: COLOR.accent }}>
              Home-made. Eggless. Tasty.
            </h4>{" "}
            {/* No top margin for tight spacing */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Titlebar;
