import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { CompanyDetail } from "../../helper/constant";
function AboutCard() {

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi There! I'm <span className="green">Shyaam</span>, a passionate Software Engineer working at <span className="green">{CompanyDetail.Company}</span> {CompanyDetail.CompanyLocation}.
            <br/>
            I hold a Bachelor of Engineering in <span className="green">Computer Science Engineering</span> from Panimalar Institute Of Technology.
            
            <br/>
            <br/>
            My professional interests include:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Develop a cool shit
            </li>
            <li className="about-activity">
              <FaHandPointRight /> High-Performance Computing
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Software Engineering
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
