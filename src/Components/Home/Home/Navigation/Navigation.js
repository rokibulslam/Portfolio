import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
const Navigation = () => {
    return (
      <div>
        <Navbar className="nav-bg" collapseOnSelect fixed="top" expand="lg"  variant="dark">
          <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-white"  href="#features">Blog</Nav.Link>
                <Nav.Link className="text-white"  href="#pricing">About Me</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Navigation;