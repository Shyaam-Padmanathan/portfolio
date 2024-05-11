import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tools } from "../../helper/constant";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        Tools.map(tool => 
            <Col xs={4} md={2} className="tech-icons">
              {tool.ToolImage}
          </Col>)
      }
    </Row>
  );
}

export default Toolstack;
