// import React from "react";
// import LayoutWrapper from "../Layout";
// import { Container, Row } from "react-bootstrap";

// function About() {
//   return (
//     <div>
//       <div className="page-heading header-text">
//         <Container>
//           <Row>
//             <div className="col-md-12">
//               <h1>Rreth Nesh</h1>
//               <span>Ne kemi mbi 10 vjet eksperiencë.</span>
//             </div>
//           </Row>
//         </Container>
//       </div>

//       <div className="more-info about-info">
//         <Container>
//           <Row>
//             <div className="col-md-12">
//               <div className="more-info-content">
//                 <Row>
//                   <div className="col-md-6 align-self-center">
//                     <div className="right-content">
//                       <span>Ekspertiza solide në fushën e financave.</span>
//                       <h2>
//                         Mësoni më shumë rreth <em>kompanisë tonë</em>
//                       </h2>
//                       <p>
//                         Eurollogaria është një firmë profesionale e
//                         kontabilitetit dhe konsulencës, e specializuar në
//                         ofrimin e shërbimeve financiare të lartë cilësie për
//                         klientët në tregun e biznesit. Nëpërmjet një ekipi të
//                         specializuar të profesionistëve të kontabilitetit,
//                         konsulentëve financiarë dhe ekspertëve të fushave të
//                         tjera të lidhura me financat, Eurollogaria ofron
//                         zgjidhje të personalizuara për të plotësuar nevojat
//                         unike të çdo klienti.
//                       </p>
//                       <a href="" className="filled-button">
//                         Lexo më shume
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="left-image">
//                       <img src="/images/about-image.jpg" alt="" />
//                     </div>
//                   </div>
//                 </Row>
//               </div>
//             </div>
//           </Row>
//         </Container>
//       </div>

    

//       <div className="fun-facts">
//         <Container>
//           <Row>
//             <div className="col-md-6">
//               <div className="left-content">
//                 <span>Fakte interesante</span>
//                 <h2>
//                   Shërbimet tona për rritjen e suksesshme të{" "}
//                   <em>biznesit tuaj</em>
//                 </h2>
//                 <p>
//                   Ne kemi gëzuar një rrugëtim të pasur të sukseseve dhe
//                   arritjeve të mëdha në fushën e kontabilitetit dhe konsulencës
//                   financiare. Klientët tanë janë dëshmitarë të rezultateve të
//                   shkëlqyera që kemi arritur për ta.
//                 </p>
//                 <a href="" className="filled-button">
//                   Lexo më shume
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-6 align-self-center">
//               <Row>
//                 <div className="col-md-6">
//                   <div className="count-area-content">
//                     <div className="count-digit">15,600</div>
//                     <div className="count-title">Orë Pune</div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="count-area-content">
//                     <div className="count-digit">50+</div>
//                     <div className="count-title">Vlerësime të mira</div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="count-area-content">
//                     <div className="count-digit">50</div>
//                     <div className="count-title">Projekte</div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="count-area-content">
//                     <div className="count-digit">10</div>
//                     <div className="count-title">Certifikime</div>
//                   </div>
//                 </div>
//               </Row>
//             </div>
//           </Row>
//         </Container>
//       </div>

//       <div className="testimonials">
//         <Container>
//           <Row>
//             <div className="col-md-12">
//               <div className="section-heading">
//                 <h2>
//                   Çfarë thonë <em>për ne</em>
//                 </h2>
//                 <span>vlerësime nga klientët tanë më të mëdhenj</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//                 <div className="testimonial-item">
//                   <div className="inner-content">
//                     <h4>Nje klient i kënaqur</h4>
//                     <p>
//                       "Eurollogaria është e vetmja zgjidhje për ne kur vjen puna
//                       e kontabilitetit. Përmes shërbimeve të tyre kemi arritur të përmirësojmë efikasitetin tonë dhe të
//                       rrisim fitimet."
//                     </p>
//                   </div>
//                   {/* <img src="http://placehold.it/60x60" alt=""/> */}
//                 </div>
//                 </div>
//                 <div className="col-md-6">
//                 <div className="testimonial-item">
//                   <div className="inner-content">
//                     <h4>Nje klient i kënaqur</h4>
//                     <p>
//                       "Eurollogaria është një partner i çmuar për ne dhe i
//                       rekomandoj me plot besim për çdo biznes që kërkon shërbime
//                       kontabiliteti të lartë cilësie."
//                     </p>
//                   </div>
//                   {/* <img src="http://placehold.it/60x60" alt=""/> */}
//                 </div>
//                 </div>
               
            
//           </Row>
//         </Container>
//       </div>
      
//   </div>
    
//   );
// }

// export default LayoutWrapper(About);
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LayoutWrapper from '../Layout';

function About() {
  return (
    <div>
      <div className="page-heading header-text">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Rreth Nesh</h1>
              <span>Ne kemi mbi 10 vjet eksperiencë.</span>
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
                        Eurollogaria është një firmë profesionale e kontabilitetit dhe konsulencës, e specializuar në
                        ofrimin e shërbimeve financiare të lartë cilësie për klientët në tregun e biznesit. Nëpërmjet një
                        ekipi të specializuar të profesionistëve të kontabilitetit, konsulentëve financiarë dhe ekspertëve të
                        fushave të tjera të lidhura me financat, Eurollogaria ofron zgjidhje të personalizuara për të plotësuar
                        nevojat unike të çdo klienti.
                      </p>
                      <a href="" className="filled-button">
                        Lexo më shumë
                      </a>
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
                  Shërbimet tona për rritjen e suksesshme të <em>biznesit tuaj</em>
                </h2>
                <p>
                  Ne kemi gëzuar një rrugëtim të pasur të sukseseve dhe arritjeve të mëdha në fushën e kontabilitetit dhe
                  konsulencës financiare. Klientët tanë janë dëshmitarë të rezultateve të shkëlqyera që kemi arritur për ta.
                </p>
                <a href="" className="filled-button">
                  Lexo më shumë
                </a>
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
                  <h4>Nje klient i kënaqur</h4>
                  <p>
                    "Eurollogaria është e vetmja zgjidhje për ne kur vjen puna e kontabilitetit. Përmes shërbimeve të tyre
                    kemi arritur të përmirësojmë efikasitetin tonë dhe të rrisim fitimet."
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial-item">
                <div className="inner-content">
                  <h4>Nje klient i kënaqur</h4>
                  <p>
                    "Eurollogaria është një partner i çmuar për ne dhe i rekomandoj me plot besim për çdo biznes që kërkon
                    shërbime kontabiliteti të lartë cilësie."
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

