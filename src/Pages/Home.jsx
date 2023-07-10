// import React from 'react'
// import LayoutWrapper from '../Layout'
// import {Container, Row} from "react-bootstrap";
// import { Link } from 'react-router-dom';



// function Home() {
//   return (
//     <div>
//         <div className="main-banner header-text" id="top">
//         <div className="Modern-Slider">
         
//           <div className="item item-1">
//             <div className="img-fill">
//                 <div className="text-content">
//                   <h6>Jemi Gati të Ju Ndihmojmë</h6>
//                   <h4>Kontabilitet &amp; Konsulencë</h4>
//                   <p>  Eurollogaria - Partneri Juaj i Besueshëm në Kontabilitet dhe Konsulencë.</p>
//                   <a as={Link} to="/contact" className="filled-button">na kontaktoni</a>
//                 </div>
//             </div>
//           </div>

         
//         </div>
//     </div>
    

//     <div className="request-form">
//       <Container>
//         <Row>
//           <div className="col-md-8">
//             <h4>Na kontaktoni për një telefonatë</h4>
//             <span>Eurollogaria - Gjendemi gati për të ju ndihmuar tani.</span>
//           </div>
//           <div className="col-md-4">
//             <a as={Link} to="/contact" className="border-button">kontakti</a>
//           </div>
//         </Row>
//       </Container>
//     </div>

//     <div className="services">
//       <Container>
//         <Row>
//           <div className="col-md-12">
//             <div className="section-heading">
//               <h2>Shërbimet <em>Financiare</em></h2>
//               <span>Ne ofrojmë shërbime të ndryshme financiare</span>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="service-item">
//               <img src="images/service_01.jpg" alt=""/>
//               <div className="down-content">
//                 <h4>Planifikimi i Taksave</h4>
//                 <p>Eurollogaria ofron shërbime të plota për planifikimin dhe përshtatjen e taksave, për të siguruar që biznesi juaj të përmbushë të gjitha obligimet tatimore.</p>
//                 <a href="" className="filled-button">Read More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="service-item">
//               <img src="images/service_02.jpg" alt=""/>
//               <div className="down-content">
//                 <h4>Konsulenca Financiare dhe Këshillim</h4>
//                 <p>Eurollogaria ofron konsulencë dhe këshillim profesional në fushën financiare për të ndihmuar bizneset të marrin vendime financiare të informuara.</p>
//                 <a href="" className="filled-button">Read More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="service-item">
//               <img src="images/service_03.jpg" alt=""/>
//               <div className="down-content">
//                 <h4>Optimizimi i Proceseve Biznesore</h4>
//                 <p>Duke optimizuar proceset tuaja biznesore, ne ju ndihmojmë të arrini kursime të kostos dhe të përmirësoni performancën e përgjithshme.</p>
//                 <a href="" className="filled-button">Read More</a>
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div>

//     {/* <div className="fun-facts">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="left-content">
//               <span>Lorem ipsum dolor sit amet</span>
//               <h2>Our solutions for your <em>business growth</em></h2>
//               <p>Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit nec congue elementum. Nulla luctus laoreet porta. Maecenas at nisi tempus, porta metus vitae, faucibus augue. 
//               osuere ante tortor ut neque.</p>
//               <a href="" className="filled-button">Read More</a>
//             </div>
//           </div>
//           <div className="col-md-6 align-self-center">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="count-area-content">
//                   <div className="count-digit">945</div>
//                   <div className="count-title">Work Hours</div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="count-area-content">
//                   <div className="count-digit">1280</div>
//                   <div className="count-title">Great Reviews</div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="count-area-content">
//                   <div className="count-digit">578</div>
//                   <div className="count-title">Projects Done</div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="count-area-content">
//                   <div className="count-digit">26</div>
//                   <div className="count-title">Awards Won</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}

//     <div className="more-info">
//       <Container>
//         <Row>
//           <div className="col-md-12">
//             <div className="more-info-content">
//               <Row>
//                 <div className="col-md-6">
//                   <div className="left-image">
//                     <img src="images/more-info.jpg" alt=""/>
//                   </div>
//                 </div>
//                 <div className="col-md-6 align-self-center">
//                   <div className="right-content">
//                     <span>Kush jemi ne</span>
//                     <h2>Mësoni më shume rreth <em>Eurollogaria</em></h2>
//                     <p>Eurollogaria është një firmë profesionale e kontabilitetit dhe konsulencës, e specializuar në ofrimin e shërbimeve financiare të lartë cilësie për klientët në tregun e biznesit. Nëpërmjet një ekipi të specializuar të profesionistëve të kontabilitetit, konsulentëve financiarë dhe ekspertëve të fushave të tjera të lidhura me financat, Eurollogaria ofron zgjidhje të personalizuara për të plotësuar nevojat unike të çdo klienti. </p>
//                     <a as={Link} to="/about" className="filled-button">Më shume</a>
//                   </div>
//                 </div>
//               </Row>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div>
// {/* 
//     <div className="testimonials">
//       <Container>
//         <Row>
//           <div className="col-md-12">
//             <div className="section-heading">
//               <h2>What they say <em>about us</em></h2>
//               <span>testimonials from our greatest clients</span>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="owl-testimonials owl-carousel">
              
//               <div className="testimonial-item">
//                 <div className="inner-content">
//                   <h4>George Walker</h4>
//                   <span>Chief Financial Analyst</span>
//                   <p>"Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem sit amet quam. Pellentesque in sagittis lacus."</p>
//                 </div>
//                 <img src="http://placehold.it/60x60" alt=""/>
//               </div>
              
//               <div className="testimonial-item">
//                 <div className="inner-content">
//                   <h4>John Smith</h4>
//                   <span>Market Specialist</span>
//                   <p>"In eget leo ante. Sed nibh leo, laoreet accumsan euismod quis, scelerisque a nunc. Mauris accumsan, arcu id ornare malesuada, est nulla luctus nisi."</p>
//                 </div>
//                 <img src="http://placehold.it/60x60" alt=""/>
//               </div>
              
//               <div className="testimonial-item">
//                 <div className="inner-content">
//                   <h4>David Wood</h4>
//                   <span>Chief Accountant</span>
//                   <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
//                 </div>
//                 <img src="http://placehold.it/60x60" alt=""/>
//               </div>
              
//               <div className="testimonial-item">
//                 <div className="inner-content">
//                   <h4>Andrew Boom</h4>
//                   <span>Marketing Head</span>
//                   <p>"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."</p>
//                 </div>
//                 <img src="http://placehold.it/60x60" alt=""/>
//               </div>
              
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div> */}

//     <div className="callback-form">
//       <Container>
//         <Row>
//           <div className="col-md-12">
//             <div className="section-heading">
//               <h2>Na kontaktoni për një <em>telefonatë</em></h2>
//               <span>Eurollogaria - Jemi gati për të dëgjuar dhe për të ju ofruar ndihmën e duhur</span>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="contact-form">
//               <form id="contact" action="" method="post">
//                 <div className="row">
//                   <div className="col-lg-4 col-md-12 col-sm-12">
//                     <fieldset>
//                       <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-4 col-md-12 col-sm-12">
//                     <fieldset>
//                       <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
//                 </fieldset>
//                   </div>
//                   <div className="col-lg-4 col-md-12 col-sm-12">
//                     <fieldset>
//                       <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-12">
//                     <fieldset>
//                       <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""/>
//                     </fieldset>
//                   </div>
//                   <div className="col-lg-12">
//                     <fieldset>
//                       <button type="submit" id="form-submit" className="border-button">Dërgo Mesazh</button>
//                     </fieldset>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div>
//     <div>
//         <br />
//         <br />
       
//       </div>
//     </div>
//   )
// }

// export default LayoutWrapper(Home)

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LayoutWrapper from '../Layout';
import ContactForm from '../Components/contact-form';

function Home() {
  return (
    <div>
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6>Jemi Gati të Ju Ndihmojmë</h6>
                <h4>Kontabilitet &amp; Konsulencë</h4>
                <p>
                  Eurollogaria - Partneri Juaj i Besueshëm në Kontabilitet dhe
                  Konsulencë.
                </p>
                <Link to="/contact" className="filled-button">
                  na kontaktoni
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="request-form">
        <Container>
          <Row>
            <Col md={8}>
              <h4>Na kontaktoni për një telefonatë</h4>
              <span>Eurollogaria - Gjendemi gati për të ju ndihmuar tani.</span>
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
                  <h4>Planifikimi i Taksave</h4>
                  <p>
                    Eurollogaria ofron shërbime të plota për planifikimin dhe
                    përshtatjen e taksave, për të siguruar që biznesi juaj të
                    përmbushë të gjitha obligimet tatimore.
                  </p>
                  <Link to="" className="filled-button">
                    Read More
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
                  <Link to="" className="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <img src="images/service_03.jpg" alt="" />
                <div className="down-content">
                  <h4>Optimizimi i Proceseve Biznesore</h4>
                  <p>
                    Duke optimizuar proceset tuaja biznesore, ne ju ndihmojmë të
                    arrini kursime të kostos dhe të përmirësoni performancën e
                    përgjithshme.
                  </p>
                  <Link to="" className="filled-button">
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
              {/* <div className="contact-form">
                <form id="contact" action="" method="post">
                  <Row>
                    <Col lg={4} md={12} sm={12}>
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
                    <Col lg={4} md={12} sm={12}>
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
                    <Col lg={4} md={12} sm={12}>
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
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
                        ></textarea>
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="border-button"
                        >
                          Dërgo Mesazh{" "}
                        </button>
                      </fieldset>
                    </Col>
                  </Row>
                </form>
              </div> */}
              <ContactForm/>
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