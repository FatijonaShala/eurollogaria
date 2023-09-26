
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (

    <header>
        
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
             <ul className="left-info">      
          
              <li><a><i className="fa fa-clock-o"></i>E Hënë - E Shtunë 08:00-16:00</a></li>
              <li><a><i className="fa fa-phone"></i>044-188-424</a></li> 
            
          </ul>
        </div>
        </div>
      </div>
    </div>
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

