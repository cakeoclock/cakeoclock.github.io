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
        <Categories ></Categories>
        
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
