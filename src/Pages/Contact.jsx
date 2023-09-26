import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LayoutWrapper from "../Layout";
import ContactForm from "../Components/contact-form";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="page-heading header-text">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Na kontaktoni</h1>
              <span>
                Ju lutem ndjehuni të lirë të na dërgoni një mesazh tani!
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-information">
        <Container>
          <Row>
            <Col md={4}>
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <h4>Telefoni</h4>
                <p>Ne jemi në dispozicion në këtë numër.</p>
                
                <Link to="tel:044-188-424">044-188-424</Link>
                
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h4>Email-i</h4>
                <p>Na kontaktoni ne emailin zyrtar.</p>
                {/* <a>eurollogaria@gmail.com</a> */}
                <Link to="mailto:eurollogaria@gmail.com">eurollogaria@gmail.com
                  </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <h4>Lokacioni</h4>
                <p>Rruga Haxhi Hoti, Rogovë 50550, Gjakova, Kosova</p>
             
                <Link to="https://www.google.com/maps?q=42.33188342527306,20.58006884045836" target="_blank">Shikoni në Google Maps</Link>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="callback-form">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading">
                <h2>
                  Na dërgoni <em>mesazh</em>
                </h2>
                <span>Planifikoni një telefonatë apo takim.</span>
              </div>
            </Col>
            <Col md={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default LayoutWrapper(Contact);
