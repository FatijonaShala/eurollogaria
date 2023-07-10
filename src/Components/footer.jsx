// import React from 'react'
// import {Container, Row} from "react-bootstrap";

// function footer() {
//   return (
//     <div> 
//     <footer>
//       <Container>
//         <Row>
//           <div className="col-md-3 footer-item">
//             <h4>Eurollogaria</h4>
//             <p>KONTABILITET & KONSULENCË
//         - Partneri Juaj i Besueshëm në Kontabilitet dhe Konsulencë.</p>
//             <ul className="social-icons">
//               <li><a rel="nofollow" href="" target="_blank"><i className="fa fa-facebook"></i></a></li>
//               <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
//             </ul>
//           </div>
//           <div className="col-md-3 footer-item">
//             <h4>Linqe të nevojshme</h4>
//             <ul className="menu-list">
//               <li><a href="#">Rreth Nesh</a></li>
//               <li><a href="#">Shërbimet</a></li>
              
//             </ul>
//           </div>
//            <div className="col-md-3 footer-item">
//             <h4>Faqe shtesë</h4>
//             <ul className="menu-list">
//               <li><a href="#">Kontakti</a></li>
//               <li><a href="#">Email</a></li>  
//             </ul>
//           </div> 
//           <div className="col-md-3 footer-item last-item">
//             <h4>Na kontaktoni</h4>
//             <div className="contact-form">
//               <form id="contact footer-contact" action="" method="post">
//                 <div className="row">
//                   <div className="col-lg-12 col-md-12 col-sm-12">
//                     <fieldset>
//                       <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-12 col-md-12 col-sm-12">
//                     <fieldset>
//                       <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-12">
//                     <fieldset>
//                       <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-12">
//                     <fieldset>
//                       <button type="submit" id="form-submit" className="filled-button">Send Message</button>
//                     </fieldset>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </footer>
    
//     <div className="sub-footer">
//       <Container>
//         <Row>
//           <div className="col-md-12">
//             <p>Copyright &copy; 2023 Eurollogaria
//             </p>
//           </div>
//         </Row>
//       </Container>
//     </div>
//     </div>
//   )
// }

// export default footer

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col md={3} className="footer-item">
              <h4>Eurollogaria</h4>
              <p>
                KONTABILITET & KONSULENCË - Partneri Juaj i Besueshëm në Kontabilitet dhe Konsulencë.
              </p>
              <ul className="social-icons">
                <li>
                  <a rel="nofollow" href="" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-item">
              <h4>Linqe të nevojshme</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Rreth Nesh</a>
                </li>
                <li>
                  <a href="#">Shërbimet</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-item">
              <h4>Faqe shtesë</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kontakti</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-item last-item">
              <h4>Na kontaktoni</h4>
              <div className="contact-form">
                <form id="contact footer-contact" action="" method="post">
                  <Row>
                    <Col lg={12} md={12} sm={12}>
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        />
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </Col>
                  </Row>
                </form>
              </div>
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
