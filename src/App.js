import "./App.css";
import Titlebar from "./Titlebar";
import Categories from "./Categories";
import { Navbar, Nav, Container } from "react-bootstrap";
import { COLOR } from "./colors";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: COLOR.background,
          minHeightheight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar style={{ backgroundColor: COLOR.secondary }}>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src="/img/logo.png"
                width="48"
                height="48"
                className="me-2" // Adjust 'me-2' for more or less spacing
              />
            </Navbar.Brand>
            <Nav className="me-auto" style={{ color: COLOR.text, fontSize:"20px", fontWeight:"bold" }}>
              <Nav.Link href="/">Cakes</Nav.Link>
              <Nav.Link href="gallery">Photo Gallery</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Titlebar></Titlebar>
        {/* <br></br> */}
        <Categories></Categories>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="Logo"
            src="/img/fssai.svg"
            width="64"
            height="64"
            className="me-2"
          />{" "}
          Certified
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Navbar
          fixed="bottom"
          style={{
            backgroundColor: COLOR.secondary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer></Footer>
        </Navbar>
      </div>
    </>
  );
}

export default App;
