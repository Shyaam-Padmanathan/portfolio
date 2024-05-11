import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiMicrosoftazure,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiWindows,
  SiGithub,
  SiVisualstudiocode
} from "react-icons/si";
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
