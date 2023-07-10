// import React from 'react'
// import LayoutWrapper from '../Layout';
// import {Container, Row} from "react-bootstrap"

// function Contact() {
//   return (
//     <div>
//       <div className="page-heading header-text">
//         <Container>
//           <Row>
//             <div className="col-md-12">
//               <h1>Na kontaktoni</h1>
//               <span>
//                 Ju lutem ndjehuni të lirë të na dërgoni një mesazh tani!
//               </span>
//             </div>
//           </Row>
//         </Container>
//       </div>

//       <div className="contact-information">
//         <Container>
//           <Row>
//             <div className="col-md-4">
//               <div className="contact-item">
//                 <i className="fa fa-phone"></i>
//                 <h4>Telefoni</h4>
//                 <p>Ne jemi në dispozicion në këtë numër.</p>
//                 <a href="#">090-080-0760</a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="contact-item">
//                 <i className="fa fa-envelope"></i>
//                 <h4>Email-i</h4>
//                 <p>Na kontaktoni ne emailin zyrtar.</p>
//                 <a href="#">eurollogaria@gmail.com</a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="contact-item">
//                 <i className="fa fa-map-marker"></i>
//                 <h4>Lokacioni</h4>
//                 <p>Rruga Haxhi Hoti, Rogovë 50550, Gjakova, Kosova</p>
//                 <a href="#">Shikoni në Google Maps</a>
//               </div>
//             </div>
//           </Row>
//         </Container>
//       </div>

//       <div className="callback-form contact-us">
//         <Container>
//           <Row>
//             <div className="col-md-12">
//               <div className="section-heading">
//                 <h2>
//                   Na dërgoni <em>mesazh</em>
//                 </h2>
//                 <span>Planifikoni një telefonatë apo takim.</span>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="contact-form">
//                 <form id="contact" action="" method="get">
//                   <div className="row">
//                     <div className="col-lg-4 col-md-12 col-sm-12">
//                       <fieldset>
//                         <input
//                           name="name"
//                           type="text"
//                           className="form-control"
//                           id="name"
//                           placeholder="Emri i plotë"
//                           required=""
//                         />
//                       </fieldset>
//                     </div>
//                     <div className="col-lg-4 col-md-12 col-sm-12">
//                       <fieldset>
//                         <input
//                           name="email"
//                           type="text"
//                           className="form-control"
//                           id="email"
//                           pattern="[^ @]*@[^ @]*"
//                           placeholder="Email-i"
//                           required=""
//                         />
//                       </fieldset>
//                     </div>
//                     <div className="col-lg-4 col-md-12 col-sm-12">
//                       <fieldset>
//                         <input
//                           name="subject"
//                           type="text"
//                           className="form-control"
//                           id="subject"
//                           placeholder="Subjekti"
//                           required=""
//                         />
//                       </fieldset>
//                     </div>
//                     <div className="col-lg-12">
//                       <fieldset>
//                         <textarea
//                           name="message"
//                           rows="6"
//                           className="form-control"
//                           id="message"
//                           placeholder="Mesazhi juaj"
//                           required=""
//                         ></textarea>
//                       </fieldset>
//                     </div>
//                     <div className="col-lg-12">
//                       <fieldset>
//                         <button
//                           type="submit"
//                           id="form-submit"
//                           className="filled-button"
//                         >
//                           Dërgoni mesazhin
//                         </button>
//                       </fieldset>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </Row>
//         </Container>
//       </div>

      
//     </div>
//   );
// }

// export default LayoutWrapper(Contact);

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LayoutWrapper from '../Layout';

function Contact() {
  return (
    <div>
      <div className="page-heading header-text">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Na kontaktoni</h1>
              <span>Ju lutem ndjehuni të lirë të na dërgoni një mesazh tani!</span>
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
                <a href="#">090-080-0760</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h4>Email-i</h4>
                <p>Na kontaktoni ne emailin zyrtar.</p>
                <a href="#">eurollogaria@gmail.com</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <h4>Lokacioni</h4>
                <p>Rruga Haxhi Hoti, Rogovë 50550, Gjakova, Kosova</p>
                <a href="#">Shikoni në Google Maps</a>
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
            {/* <Col md={12}>
              <div className="contact-form">
                <form id="contact" action="" method="get">
                  <Row>
                    <Col lg={4} md={12} sm={12}>
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Emri i plotë"
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
                          placeholder="Email-i"
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
                          placeholder="Subjekti"
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
                          placeholder="Mesazhi juaj"
                          required=""
                        ></textarea>
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Dërgoni mesazhin
                        </button>
                      </fieldset>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col> */}
            <Col md={12}>
              <div className="contact-form">
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
              </div>
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
