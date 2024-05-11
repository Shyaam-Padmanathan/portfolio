import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeLogo from "../../assets/home_2.svg";
import Particle from "../Particle";
import Type from "./Type";
import Resume from "../../assets/ShyaamResume.pdf";
import { BiDownload, BiLoaderCircle } from "react-icons/bi";
import axios from 'axios';
import fileDownload from 'js-file-download';

const Home = () => {
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
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> SHYAAM </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", gap: 20 }}>
                <div><Type /></div>  
                <br />
                <Button variant="primary" onClick={handleDownload}>
                  {enableLoader ? <BiLoaderCircle /> : <BiDownload />}&nbsp;
                  Resume
                </Button>
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
