import React from "react";
import { Card } from "react-bootstrap";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <Card className='custom-card'>
      <Card.Body>
        <Card.Title className='custom-title'>{props.title}</Card.Title>
        <Card.Text>
          {props.content.map((element, i) => {
            console.log(element);
            return <p key={i}>{element}</p>;
          })}
        </Card.Text>
        <div style={{ marginTop: "2%" }}>
          <p>Technologies used - {props.technologies.map((e) => e + ", ")}</p>
        </div>
      </Card.Body>
    </Card>
  );
}
