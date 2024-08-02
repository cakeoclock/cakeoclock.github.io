import { Container, Tabs, Tab } from "react-bootstrap";
import MenuCard from "./MenuCard";

function Categories() {
  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="cream"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="cream" title="Cream Cakes">
            <MenuCard category={0}></MenuCard>
            <p style={{ textAlign: "center" }}>
              All types of customized theme cakes available. Price charged
              accordingly.
            </p>
          </Tab>
          <Tab eventKey="dry" title="Dry Cakes">
            <MenuCard category={1}></MenuCard>
          </Tab>
          <Tab eventKey="pastries" title="Pastries">
            <MenuCard category={2}></MenuCard>
          </Tab>
          <Tab eventKey="sweet" title="Sweet Delights">
            <MenuCard category={3}></MenuCard>
          </Tab>
        </Tabs>
        <p style={{ textAlign: "center" }}>
              Free home delivery available. 
              {/* Delivery charge (₹30 - ₹50) according to distance or free take away. */}
            </p>
      </Container>
    </>
  );
}

export default Categories;
