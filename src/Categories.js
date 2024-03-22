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
            <MenuCard category={0}></MenuCard>
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
      </Container>
    </>
  );
}

export default Categories;
