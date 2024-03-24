import "./App.css";
import Titlebar from "./Titlebar";
import Categories from "./Categories";
import { Navbar } from "react-bootstrap";
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
            className="me-2" // Adjust 'me-2' for more or less spacing
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
