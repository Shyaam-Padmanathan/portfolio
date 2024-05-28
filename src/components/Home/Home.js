import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeLogo from "../../assets/home_2.svg";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";


const Home = () => {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! 
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1> */}

              <h1 className="heading-name">
                Hi I'm
                <strong className="main-name"> SHYAAM </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", display: 'grid', rowGap: 5 }}>
                <p> I'm a tech enthusiast who always looks into new tech stacks. A single word to represent me is adaptability. Loves to learn new technology to work on a project.</p>
                <div><Type /></div>
                &nbsp;
                <div>
                  <ul>
                    <li className="social-icons">
                      <a className="home-social-icons"
                        href="https://github.com/Shyaam-Padmanathan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a className="home-social-icons"
                        href="https://www.linkedin.com/in/shyaam-p-b62277157/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a className="home-social-icons"
                        href="mailto:shyaampadmanathan99@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillMail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={HomeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
  );
};

export default Home;
