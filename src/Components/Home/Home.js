import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "../TypeWriter";
import {
  Vue,
  CSharp,
  AndroidStudio,
  Javascript,
  LogoReact,
  Redux,
  XAML,
  VisualStudio,
  VisualStudioCode,
} from "../../Assets/images";
import "./Home.css";

export default function Home() {
  return (
    <Container className='home-container'>
      <Row style={{ padding: "3%" }}>
        <h1>
          Hi!
          <span className='wave' role='img' aria-labelledby='wave'>
            👋🏻
          </span>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h1>This is VIDYADHEESH M N</h1>
        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>
      </Row>
      <Row style={{ marginTop: "15%", padding: "3%" }}>
        <div style={{ textAlign: "left" }}>
          <h2>Here is a little information about my skills and interests</h2>
          <br />
          <div style={{ fontSize: "20px" }}>
            <p>I like to design and develop web and desktop applications</p>
            <p>
              I am fluent in developing front end using programming languages and frameworks such as
              C#, XAML, React and Javascript.
            </p>
            <p>I have keen interest in automation as well.</p>
          </div>
        </div>
      </Row>
      <Row style={{ marginTop: "15%", padding: "3%" }}>
        <div style={{ textAlign: "left" }}>
          <h3>Programming Languages and Frameworks I work on</h3>

          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col'>
                <img
                  src={LogoReact}
                  alt='ReactJS'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
              <div className='col'>
                <img
                  src={Javascript}
                  alt='Javascript'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
              <div className='col'>
                <img
                  src={Redux}
                  alt='Redux'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
              <div className='col'>
                <img
                  src={Vue}
                  alt='ReactJS'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
              <div className='col'>
                <img
                  src={CSharp}
                  alt='C#'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
              <div className='col'>
                <img
                  src={XAML}
                  alt='XAML'
                  style={{ objectFit: "cover", width: "calc( 100% / 6 )" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ marginTop: "18%" }}>
        <h4>FIND ME ON</h4>
        <ul className='home-about-social-links'>
          <li className='social-icons'>
            <a
              href='https://github.com/VidyadheeshMN'
              target='_blank'
              rel='noreferrer'
              className='icon-colour  home-social-icons'
            >
              <AiFillGithub />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://www.linkedin.com/in/vidyadheesh-m-n-637476199/'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-social-icons'
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}
