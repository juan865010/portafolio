import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/port.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MIS <strong className="purple">PROYECTOS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos proyectos en los que trabaje recientemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portafolio"
              description="Mi portafolio La página de mi portafolio personal se crea con react, html, css, bootstrap, donde se encuentra mi informacion personal y contacto directo hacia mi persona."
              ghLink="https://github.com/juan865010"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogs"
              description="Blogs
              La página de mi blog personal se crea con react y css, que toma el contenido de los archivos y lo representa con react Admite el modo oscuro y es fácil escribir blogs." 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
