import { COLOR } from "./colors";

function Navbar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: COLOR.background,
          paddingLeft:"32px",
          paddingRight:"32px",
          paddingTop:"8px",
          paddingBottom:"8px"
        }}
      >
        <p>Welcome to Cake O'Clock</p>
      </div>
    </>
  );
}

export default Navbar;
