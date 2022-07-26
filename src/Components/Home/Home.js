import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MDBTooltip } from "mdb-react-ui-kit";

import Type from "../TypeWriter";
import {
  Vue,
  CSharp,
  LogoCSharp,
  AndroidStudio,
  Javascript,
  LogoReact,
  Redux,
  XAML,
  VisualStudio,
  LogoNpm,
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
        <div>
          <h4>Programming Languages and Frameworks I work on</h4>

          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col' data-tip='ReactJS' data-for='custom-class'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://reactjs.org/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>ReactJS</div>
                    </>
                  }
                >
                  <img src={LogoReact} alt='ReactJS' className='img-center-tech' />
                </MDBTooltip>
              </div>

              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://www.javascript.com/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>Javascript</div>
                    </>
                  }
                >
                  <img src={Javascript} alt='Javascript' className='img-center-tech' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://redux.js.org/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>Redux</div>
                    </>
                  }
                >
                  <img src={Redux} alt='Redux' className='img-center-tech' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://vuejs.org/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>VueJS</div>
                    </>
                  }
                >
                  <img src={Vue} alt='Vue' className='img-center-tech' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{
                    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
                    target: "_blank",
                  }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>C#</div>
                    </>
                  }
                >
                  <img src={LogoCSharp} alt='C#' className='img-center-tech' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{
                    href: "https://docs.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0",
                    target: "_blank",
                  }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>XAML</div>
                    </>
                  }
                >
                  <img src={XAML} alt='XAML' className='img-center-tech' />
                </MDBTooltip>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ marginTop: "1%", padding: "3%" }}>
        <div>
          <h4>Tools I use</h4>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://code.visualstudio.com/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>VisualStudioCode</div>
                    </>
                  }
                >
                  <img src={VisualStudioCode} alt='VisualStudioCode' className='img-center-tools' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://visualstudio.microsoft.com/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>VisualStudio</div>
                    </>
                  }
                >
                  <img src={VisualStudio} alt='VisualStudio' className='img-center-tools' />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://www.npmjs.com/", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>Node Package Manager</div>
                    </>
                  }
                >
                  <img
                    src={LogoNpm}
                    alt='LogoNpm'
                    className='img-center-tools'
                    style={{ marginTop: "8%" }}
                  />
                </MDBTooltip>
              </div>
              <div className='col'>
                <MDBTooltip
                  tag='a'
                  wrapperProps={{ href: "https://developer.android.com/studio", target: "_blank" }}
                  title={
                    <>
                      <div style={{ color: "#fffada" }}>AndroidStudio</div>
                    </>
                  }
                >
                  <img src={AndroidStudio} alt='AndroidStudio' className='img-center-tools' />
                </MDBTooltip>
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
