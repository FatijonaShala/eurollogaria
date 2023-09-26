import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LayoutWrapper from "../Layout";

function About() {
  return (
    <div>
      <div className="page-heading header-text">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Rreth Nesh</h1>
              <span>Ne kemi mbi 25 vite eksperiencë.</span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="more-info about-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="more-info-content">
                <Row>
                  <Col md={6} className="align-self-center">
                    <div className="right-content">
                      <span>Ekspertiza solide në fushën e financave.</span>
                      <h2>
                        Mësoni më shumë rreth <em>kompanisë tonë</em>
                      </h2>
                      <p>
                      Eurollogaria është një firmë profesionale e kontabilitetit dhe konsulencës që ka për qëllim të ofrojë shërbime financiare të lartë cilësie për klientët në tregun e biznesit. Me një fokus të veçantë në kontabilitet dhe financë, firma specializohet në ndihmën e klientëve të saj për të menaxhuar dhe kuptuar aspektet financiare të biznesit të tyre.
                      </p>

                      <p>Për të arritur këtë qëllim, Eurollogaria ka formuar një ekip të specializuar të profesionistëve të kontabilitetit, konsulentëve financiarë dhe ekspertëve të fushave të tjera të lidhura me financat. Këta profesionistë të kualifikuar dhe me përvojë përdorin njohuritë dhe ekspertizën e tyre për të ofruar zgjidhje të personalizuara për çdo klient.</p>
                      <p>Puna e Eurollogaria fillon me njohjen e nevojave të klientit. Për të kuptuar plotësisht situatën financiare të një klienti, firma zhvillon një analizë të hollësishme të të dhënave financiare të biznesit. Kjo analizë ndihmon në identifikimin e sfidave dhe mundësive për rritje financiare.

Me bazë në rezultatet e analizës, Eurollogaria ofron këshilla dhe konsulencë të specializuar për të përmirësuar menaxhimin financiar të biznesit. Kjo përfshin zhvillimin e strategjive të përshtatshme të financave, kontrollin e shpenzimeve, optimizimin e taksimit, dhe përgatitjen e raporteve financiare të rregullta dhe të besueshme.</p>
                      
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="left-image">
                      <img src="/images/about-image.jpg" alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="fun-facts">
        <Container>
          <Row>
            <Col md={6}>
              <div className="left-content">
                <span>Fakte interesante</span>
                <h2>
                  Shërbimet tona për rritjen e suksesshme të{" "}
                  <em>biznesit tuaj</em>
                </h2>
                <p>
                  Ne kemi gëzuar një rrugëtim të pasur të sukseseve dhe
                  arritjeve të mëdha në fushën e kontabilitetit dhe konsulencës
                  financiare. Klientët tanë janë dëshmitarë të rezultateve të
                  shkëlqyera që kemi arritur për ta.
                </p>
                <p>
                  Ne kemi gëzuar një rrugëtim të pasur të sukseseve dhe
                  arritjeve të mëdha në fushën e kontabilitetit dhe konsulencës
                  financiare. Klientët tanë janë dëshmitarë të rezultateve të
                  shkëlqyera që kemi arritur për ta.
                </p>
             
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <Row>
                <Col md={6}>
                  <div className="count-area-content">
                    <div className="count-digit">15,600</div>
                    <div className="count-title">Orë Pune</div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="count-area-content">
                    <div className="count-digit">50+</div>
                    <div className="count-title">Vlerësime të mira</div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="count-area-content">
                    <div className="count-digit">50</div>
                    <div className="count-title">Projekte</div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="count-area-content">
                    <div className="count-digit">10</div>
                    <div className="count-title">Certifikime</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonials">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading">
                <h2>
                  Çfarë thonë <em>për ne</em>
                </h2>
                <span>vlerësime nga klientët tanë më të mëdhenj</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4> <em>Nje klient i kënaqur </em></h4>
                  <p>
                    "Eurollogaria është e vetmja zgjidhje për ne kur vjen puna e
                    kontabilitetit. Përmes shërbimeve të tyre kemi arritur të
                    përmirësojmë efikasitetin tonë dhe të rrisim fitimet."
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4><em>Nje klient i kënaqur</em></h4>
                  <p>
                    "Eurollogaria është një partner i çmuar për ne dhe i
                    rekomandoj me plot besim për çdo biznes që kërkon shërbime
                    kontabiliteti të lartë cilësie."
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LayoutWrapper(About);
