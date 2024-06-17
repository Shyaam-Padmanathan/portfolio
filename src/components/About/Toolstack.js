import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tools } from "../../helper/constant";
import Particle from "../Particle";


function Toolstack() {
  return (
    <section id="tools">
    <Container fluid className="about-section">
    <Container>
    <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {
        Tools.map(tool => 
            <Col xs={4} md={2} className="tech-icons">
              {tool.ToolImage}
          </Col>)
      }
    </Row>
    </Container>
    <Particle/>
    </Container>
    </section>
  );
}

export default Toolstack;
