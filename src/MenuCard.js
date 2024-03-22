import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import OfferBanner from "./OfferBanner";

function MenuCard({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/data.xlsx"); // Path to your file in the public folder
      const arrayBuffer = await response.arrayBuffer(); // Convert the data to an array buffer
      const workbook = XLSX.read(arrayBuffer, { type: "buffer" }); // Read the Excel file

      const worksheetName = workbook.SheetNames[category]; // Or whatever sheet you need
      const worksheet = workbook.Sheets[worksheetName];

      const json = XLSX.utils.sheet_to_json(worksheet); // Convert sheet to JSON
      setData(json); // Update state
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {data.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
              <Card style={{ height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={`img/${product.image}`}
                  alt={product.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                {product.inStock === "no" && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust background color and transparency as needed
                      color: "white", // Adjust text color as needed
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px", // Adjust font size as needed
                    }}
                  >
                    Out of Stock
                  </div>
                )}
                <Card.Body>
                  <Card.Title className="mb-0">{product.name}</Card.Title>
                  {/* <Card.Text className="mb-0">{product.description}</Card.Text> */}
                  {/* <Card.Text className="mt-0">₹{product.price}</Card.Text> */}
                  {/* Add more details or buttons here */}
                  {product.onDiscount === "yes" ? (
                    product.discountPercent != null ? (
                      <>
                        {" "}
                        <>
                          <Card.Text className="d-flex justify-content-start align-items-center m-0">
                            <span>
                              ₹
                              {Math.round(
                                product.price *
                                  (1 - product.discountPercent / 100)
                              )}
                            </span>{" "}
                            <span
                              className="text-danger"
                              style={{ marginLeft: "8px", fontSize: "12px" }}
                            >
                              <s>₹{product.price}</s>
                            </span>
                          </Card.Text>
                        </>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Card.Text className="m-0">₹{product.price}</Card.Text>
                      </>
                    )
                  ) : (
                    <>
                      <Card.Text className="m-0">₹{product.price}</Card.Text>
                    </>
                  )}
                  <Card.Text
                    className="m-0"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    {product.priceFor}
                  </Card.Text>
                </Card.Body>
                {product.onDiscount === "yes" ? (
                  product.discountPercent != null ? (
                    <>
                      {" "}
                      <OfferBanner
                        offer={`${product.discountPercent}% Off`}
                      ></OfferBanner>
                    </>
                  ) : (
                    <>
                      {" "}
                      <OfferBanner offer={product.discountOffer}></OfferBanner>
                    </>
                  )
                ) : (
                  <></>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MenuCard;
