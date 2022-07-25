import React from "react";
import { Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { AiFillGithub } from "react-icons/ai";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <Card className='custom-card'>
      <Card.Body>
        <Card.Title className='custom-title'>{props.title}</Card.Title>
        <Card.Text>
          {props.content.map((element, i) => {
            return (
              <p className='custom-p' key={i}>
                {element}
              </p>
            );
          })}
        </Card.Text>
        <div style={{ marginTop: "2%" }}>
          <p className='custom-p'>
            Technologies used -{" "}
            {props.technologies.map((e, i) => (i == props.technologies.length - 1 ? e : e + ", "))}
          </p>
        </div>
        {props.link ? (
          <div style={{ float: "left" }}>
            Repository Link:
            <a
              href={props.link}
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-social-icons'
            >
              <AiFillGithub />
            </a>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
}
