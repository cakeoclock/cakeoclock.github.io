import { COLOR } from "./colors";
import { Container, Tabs, Tab } from "react-bootstrap";
import MenuCard from "./MenuCard";

function Categories() {
  return (
    <>
      <Container >
        <Tabs
          defaultActiveKey="cakes"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="cakes" title="Cakes">
            <MenuCard></MenuCard>
          </Tab>
          <Tab eventKey="dry" title="Dry Cakes">
            <MenuCard></MenuCard>
          </Tab>
          <Tab eventKey="pastries" title="Pastries">
            <MenuCard></MenuCard>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Categories;
