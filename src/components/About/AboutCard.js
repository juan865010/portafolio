import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos soy <span className="purple">Juan Beltran </span>
            de <span className="purple"> Potosi-Bolivia</span>
            <br />Soy un estudiante de la carrera de ingenieria de sistemas
            <br /> que esta en 7° semestre en la Universidad Autonoma Tomas Frias de Potosi
            Aparte de programar, me gusta hacer otras actividades como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hacer Deporte
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar juegos en red
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El unico modo de hacer un gran trabajo es amar lo que haces!"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
