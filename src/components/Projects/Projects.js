import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import bayesnet from "../../assets/Projects/bayesnet.jpg";
// import quantum from "../../assets/Projects/quantum.png";
// import diffusers from "../../assets/Projects/diffusers.jpg"
// import portfolio from "../../assets/Projects/portfolio.png";
// import pandasai from "../../assets/Projects/pandas-ai.png";

import { ProjectDetails } from "../../helper/constant";

function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p className="text">Here are a few projects I've worked on recently</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectDetails.map(x=>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={x.ProjectImgPath}
              title={x.ProjectTitle}
              description={x.ProjectDescription}
              link={x.ProjectDemoUrl}
            />
          </Col>
          )}
        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusers}
              title="Diffusers-rs"
              description={t('Proj1')}
              link=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bayesnet}
              isBlog={false}
              title="Baylib"
              description={t('Proj2')}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pandasai}
              isBlog={false}
              title="Pandas AI"
              description={t('Proj5')}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="Qlearnkit"
              description={t('Proj3')}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={'This website'}
              description={t('Proj4')}
              link=""
            />
          </Col>          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
