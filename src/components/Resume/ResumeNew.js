import React, { useState, useEffect } from "react";
import { Container,} from "react-bootstrap";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
       <h2><span className="purple">SOBRE MI EDUCACION </span></h2> 
          
        
        <h3><p>Universidad Autonoma Tomas Frias</p></h3>
        <h3><p>Ingeniería de Sistemas</p></h3>
        <p>Estudios de Ingeniería en Sistemas en la Universidad Autónoma Tomás Frías</p>
        <p>con amplio conocimiento en diseño y desarrollo web y con amplia disposición</p>
        <p>en razonamiento lógico y matemático, análisis y resolución de problemas.</p>
      </Container>
    </div>
  );
}

export default ResumeNew;
