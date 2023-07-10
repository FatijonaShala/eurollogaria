// import React from "react";
// import { Navbar, Nav, Container, Row } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";

// function header() {
//   return (
//     <div>
     
//       <header className="">
//         <Navbar className="navbar navbar-expand-lg">
//           <Container>
//             <Navbar.Brand  as={Link} to="/">
//               <h2>Eurollogaria</h2>
//             </Navbar.Brand>
//             <Navbar.Toggle
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarResponsive"
//               aria-controls="navbarResponsive"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             />

//             <Navbar.Collapse
//               className="collapse navbar-collapse"
//               id="navbarResponsive">
//               <Nav className="navbar-nav ml-auto">
//                 <Nav.Link as={NavLink} to="/services"  className="nav-link">
//                   Shërbimet
//                 </Nav.Link>

//                 <Nav.Link  as={NavLink} to="/about" className="nav-link">
//                  Rreth Nesh
//                 </Nav.Link>

//                 <Nav.Link  as={NavLink} to="/contact" className="nav-link">
//                   Kontakti
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </header>
//     </div>
//   );
// }

// export default header;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar className="navbar navbar-expand-lg" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2>Eurollogaria</h2>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ml-auto">
              <Nav.Link as={NavLink} to="/services" className="nav-link">
                Shërbimet
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                Rreth Nesh
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link">
                Kontakti
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

