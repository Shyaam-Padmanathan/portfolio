import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row } from "react-bootstrap";
import { useThemeContext } from "../../hooks/themeHook";
import Particle from "../Particle";

function Github() {
  const { dark } = useThemeContext();

  // personalized colors for the 
  // contributions calendar
  const colourTheme = dark ? 
  // colors for the dark theme
  {
    background: "transparent",
    text: "#ffffff",
    level4: "#39d353",
    level3: "#26a641",
    level2: "#006d32",
    level1: "#0e4429",
    level0: "#161b22",
  } 
  :
  // colors for the white theme
  {
    background: "transparent",
    level4: "#216e39",
    level3: "#30a14e",
    level2: "#40c463",
    level1: "#9be9a8",
    level0: "#ebedf0",
  };

  return (
    <section id="github">
    <Container fluid className="about-section">
    <Container>
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="green">Github</strong> Activity
      </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      

      <GitHubCalendar
        username="Shyaam-Padmanathan"
        blockSize={16}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
    </Container>
    <Particle/>
    </Container>
    </section>
  );
}

export default Github;
