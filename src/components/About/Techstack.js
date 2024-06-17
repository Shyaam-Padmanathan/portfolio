import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Frameworks } from "../../helper/constant";
import Particle from "../Particle";

function Techstack() {
  return (
    <section id="skills">
    <Container fluid className="about-section">
    <Container>
      <h1 className="project-heading">
           <strong className="green">Languages </strong>
           and <strong className="green">Frameworks </strong> I use
      </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {
        Frameworks.map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool.FrameworkImage}
          </Col>)
      }
    </Row>
    </Container>
    <Particle/>
    </Container>
    </section>
  );
}

export default Techstack;
