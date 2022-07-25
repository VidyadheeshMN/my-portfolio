import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      location: "Company",
      title: "Textile Automation",
      content: [
        "Developed front-end and logic for a desktop application which automated color defect detection using image processing coupled with industry standard cameras and also generated reports of length, width, weight and other necessary parameters as well as fabric wastage, etc.",
        "The application was also capable of controlling most of the motors and actuators in the Relaxing Machines using serial communication and various wireless IoT Technologies such as MQTT.",
        "Understood and used third party libraries to control and configure the Cameras and maximise their performance.",
      ],
      technologies: ["C#", "XAML", "MQTT", "Serial Communication (RS485)", ".NET Framework"],
    },
    {
      location: "Company",
      title: "Contract Automation and Management",
      content: [
        "Developed design and logic for a web application which automated the entire Contract creation and management.",
        "The application was capable of creating templates for Contracts which could be reused for creating any number of contracts quickly and precisely, it also took care of all the legal constraints required for the creation of legal Contracts, also coupled with Approval Engine and Role Management Engine for approving and managing Contracts.",
      ],
      technologies: ["Javascript", "React", "Redux", "CSS"],
    },
    {
      location: "College",
      title: "Crop Predictor",
      content: [
        "Built an android application which predicted crops based on different soil conditions using Kotlin, used Python for machine learning, merged python with Kotlin using chaquopy library, used multiple sensors for detecting various soil parameters.",
        "The IoT part was done using various sensors such as pH sensor, light sensor, humidity sensor, temperature sensor and conductivity sensor. The values from these sensors were sent to blynk cloud using Arduino IDE with Esp8266 wifi development board and the mobile application would do an API call to the cloud and display the values and crop prediction with an interactive UI.",
      ],
      technologies: ["Kotlin", "XML", "Blynk Cloud", "IoT"],
    },
    {
      location: "College",
      title: "Calendar with Event scheduler",
      content: [
        "Developed a simple web application in React which let the users login and schedule events with all the necessary details, included simple time validation to prevent timeline conflicts for multiple events in the same day.",
        "Used local storage for saving all the event details as JSON",
      ],
      technologies: ["React", "Javascript", "CSS"],
    },
    {
      location: "College",
      title: "Real-time location tracker",
      content: [
        "built android application using java, Rest API and retrofit2 which tracks location of a friend in real time using Google maps API and Google Login facility",
        "Supported friend requests, meaning location could be tracked only if a person was added as a friend",
      ],
      technologies: ["Java", "Rest API", "XML"],
    },
    {
      location: "College",
      title: "Order Management System",
      content: [
        "built a very simple Java Swing application which tracked orders in a store and displayed number of items present in the warehouse of different categories and number of items sold for the present day and the profits, used MySQL for storing data",
      ],
      technologies: ["Java", "Swing", "MySQL"],
    },
  ];

  return (
    <Container className='project-section'>
      <Row style={{ marginTop: "4%" }}>
        <h2>Here are a list of all the projects that i have worked on</h2>
      </Row>
      <Row>
        <h3 style={{ textAlign: "left", marginTop: "3%" }}>In Company</h3>
        <div className='grid-container'>
          {projects
            .filter((e) => e.location === "Company")
            .map((e, i) => (
              <div key={i} className='grid-item'>
                <ProjectCard content={e.content} technologies={e.technologies} title={e.title} />
              </div>
            ))}
        </div>
      </Row>
      <Row>
        <h3 style={{ textAlign: "left", marginTop: "5%" }}>In College</h3>
        <div className='grid-container'>
          {projects
            .filter((e) => e.location === "College")
            .map((e, i) => (
              <div key={i} className='grid-item'>
                <ProjectCard content={e.content} technologies={e.technologies} title={e.title} />
              </div>
            ))}
        </div>
      </Row>
    </Container>
  );
}
