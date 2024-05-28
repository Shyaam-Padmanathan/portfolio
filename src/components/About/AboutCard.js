import React, { useState }from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { BiDownload, BiLoaderCircle } from "react-icons/bi";
import Resume from "../../assets/ShyaamResume.pdf";
import axios from 'axios';
import fileDownload from 'js-file-download';

function AboutCard() {
  const [enableLoader, setEnableLoader] = useState(false);

  const handleDownload = async () => {
    setEnableLoader(true);
    await axios.get(Resume, {
      responseType: 'blob',
    })
      .then((res) => {
        fileDownload(res.data, 'Shyaam_Resume.pdf');
        setEnableLoader(false);
      })
      .catch((error) => {
        console.error("Error downloading the file: ", error);
        setEnableLoader(false);
      });
  };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a Fullstack Engineer with extensive experience in both corporate and freelance environments. Having worked on over 10 projects using emerging tech stacks, I specialize in creating robust and scalable applications. My skills encompass front-end and back-end development, allowing me to deliver user-friendly interfaces and optimized system performance.
          I thrive on solving complex problems and collaborating with cross-functional teams. Whether for leading companies or innovative startups, I bring dedication, creativity, and technical excellence to every project.
          </p>
          <br/>
          <div style={{ textAlign: "justify" }}><Button className="gradient-backgroud" onClick={handleDownload}>
                  {enableLoader ? <BiLoaderCircle /> : <BiDownload />}&nbsp;
                  Download CV
                </Button>
                </div>
          {/* <ul>
            <li className="about-activity">
              <FaHandPointRight /> Develop a cool shit
            </li>
            <li className="about-activity">
              <FaHandPointRight /> High-Performance Computing
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Software Engineering
            </li>
          </ul> */}

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
