import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <div style={{ margin: "50px" }}>
          <h1 style={{ width: "60%" }}>
            90% of Canadian businesses experienced a cyber attack in 2022
          </h1>
          <br />
          <h3>Don't be another statistic</h3>
          <br />
          <Button variant="success">Learn more</Button>
        </div>
      </Container>
      <hr />
      <br />
      <div style={{}}>
        {" "}
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <h1>Our Partners</h1>
        </Container>
        <br />
        <Container
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col sm={3}>
              <Image
                src="https://letsteachtheworld.org/wp-content/uploads/2016/07/myce-microsoft-Logo-2-300x85.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={3}>
              <Image
                src="https://149360579.v2.pressablecdn.com/wp-content/uploads/2020/01/government-of-canada-logo-Copy.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={3}>
              <Image
                src="https://1000logos.net/wp-content/uploads/2018/10/RBC-Logo.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={3}>
              <Image
                src="https://www.vmcdn.ca/f/files/shared/corporate-logos/_logo_theottawahospital_1500x600.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <hr />
      <br />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Solutions</h1>
      </Container>
      <br />
      <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Row>
          <Col sm={2}>Prevention and Protection</Col>
          <Col sm={1}></Col>
          <Col sm={2}>Emergency Response</Col>
          <Col sm={1}></Col>
          <Col sm={2}>Simulated Environments</Col>
          <Col sm={1}></Col>
          <Col sm={2}>Consultation</Col>
        </Row>
      </Container>
    </>
  );
}
