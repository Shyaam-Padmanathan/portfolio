import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
//import { BsTelegram } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/Shyaam-Padmanathan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/shyaam-p-b62277157/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="mailto:shyaampadmanathan99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;