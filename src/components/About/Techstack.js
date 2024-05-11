import React from "react";
import { Col, Row } from "react-bootstrap";
import { Frameworks } from "../../helper/constant";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        Frameworks.map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool.FrameworkImage}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
