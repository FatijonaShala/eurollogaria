
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col md={5} className="footer-item">
              <h4>Eurollogaria</h4>
              <p>
                KONTABILITET & KONSULENCË - Partneri Juaj i Besueshëm në Kontabilitet dhe Konsulencë.
              </p>
              <ul className="social-icons">
                <li>
               
                    <i className="fa fa-facebook"></i>
                
                </li>
                <li>
                  
                    <i className="fa fa-linkedin"></i>
                 
                </li>
              </ul>
            </Col>
            <Col md={4} className="footer-item">
              <h4>Linqe të nevojshme</h4>
              <ul className="menu-list">
                <li>
                  <Link to="/about">Rreth Nesh</Link>
                </li>
                <li>
                  <Link to="/services">Shërbimet</Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-item">
              <h4>Faqe shtesë</h4>
              <ul className="menu-list">
                <li>
                  <Link to="/contact">Kontakti</Link>
                </li>
                <li>
                  
                  <Link to="mailto:eurollogaria@gmail.com">Email
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="sub-footer">
        <Container>
          <Row>
            <Col md={12}>
              <p>Copyright &copy; 2023 Eurollogaria</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
