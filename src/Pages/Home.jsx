import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LayoutWrapper from '../Layout';
import ContactForm from '../Components/contact-form';
import HeaderSlider from '../Components/header-slider';

function Home() {
  return (
    <div>
      <div className="main-banner header-text" id="top">

        <HeaderSlider />
      </div>

      <div className="request-form">
        <Container>
          <Row>
            <Col md={8}>
              <h4>Na kontaktoni për një telefonatë</h4>
              <span> Gjendemi gati për të ju ndihmuar tani.</span>
            </Col>
            <Col md={4}>
              <Link to="/contact" className="border-button">
                kontakti
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="services">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading">
                <h2>
                  Shërbimet <em>Financiare</em>
                </h2>
                <span>Ne ofrojmë shërbime të ndryshme financiare</span>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <img src="images/service_01.jpg" alt="" />
                <div className="down-content">
                  <h4>Shërbime kontabiliteti</h4>
                  <p>
                    Eurollogaria ofron shërbime të plota kontabiliteti që
                    përfshin procesin e identifikimit, regjistrimit dhe
                    vlerësimit të transaksioneve financiare.
                  </p>
                  <Link to="/services" className="filled-button">
                    Lexo më shumë
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <img src="images/service_02.jpg" alt="" />
                <div className="down-content">
                  <h4>Konsulenca Financiare dhe Këshillim</h4>
                  <p>
                    Eurollogaria ofron konsulencë dhe këshillim profesional në
                    fushën financiare për të ndihmuar bizneset të marrin vendime
                    financiare të informuara.
                  </p>
                  <Link to="/services" className="filled-button">
                    Lexo më shumë
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <img src="images/service_03.jpg" alt="" />
                <div className="down-content">
                  <h4>Të dhënat financiare</h4>
                  <p>
                    Janë të rëndësishme për organizatat në mënyrë që të
                    monitorojnë performancën e tyre. Ofrojmë përgatitjen,
                    analizat & kontrollin e llogarive financiare.
                  </p>
                  <Link to="/services" className="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="more-info">
        <Container>
          <Row>
            <Col md={6}>
              <div className="left-image">
                <img src="images/more-info.jpg" alt="" />
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="right-content">
                <span>Kush jemi ne</span>
                <h2>
                  Mësoni më shumë rreth <em>Eurollogaria</em>
                </h2>
                <p>
                  Eurollogaria është një firmë profesionale e kontabilitetit dhe
                  konsulencës, e specializuar në ofrimin e shërbimeve financiare
                  të lartë cilësie për klientët në tregun e biznesit. Nëpërmjet
                  një ekipi të specializuar të profesionistëve të
                  kontabilitetit, konsulentëve financiarë dhe ekspertëve të
                  fushave të tjera të lidhura me financat, Eurollogaria ofron
                  zgjidhje të personalizuara për të plotësuar nevojat unike të
                  çdo klienti.
                </p>
                <Link to="/about" className="filled-button">
                  Më shumë
                </Link>
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
                  Na kontaktoni për një <em>telefonatë</em>
                </h2>
                <span>
                  Eurollogaria - Jemi gati për të dëgjuar dhe për të ju ofruar
                  ndihmën e duhur
                </span>
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

export default LayoutWrapper(Home);