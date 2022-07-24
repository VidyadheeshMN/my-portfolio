import React, { useState, useEffect } from "react";
import pdf from "../../Assets/Vidyadheesh-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume_link =
  "https://raw.githubusercontent.com/VidyadheeshMN/my-portfolio/main/public/Vidyadheesh-Resume.pdf";

export default function Home() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant='primary' href={pdf} target='_blank' style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <br />
        <div className='resume'>
          <Document
            file={resume_link}
            onLoadSuccess={({ numPages }) => {
              console.log(numPages);
              setNumPages(numPages);
            }}
            className='d-flex justify-content-center'
          >
            <div className='col m-auto'>
              {Array.apply(null, Array(numPages)).map((page, idx) => (
                <div>
                  <Page key={idx} pageNumber={idx + 1} scale={width > 786 ? 1.7 : 0.6} />
                  <p>
                    Page {idx + 1} of {numPages}
                  </p>
                </div>
              ))}
            </div>
          </Document>
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant='primary' href={pdf} target='_blank' style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <br />
      </Container>
    </div>
  );
}
