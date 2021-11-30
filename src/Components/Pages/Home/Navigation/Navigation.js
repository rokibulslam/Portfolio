import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
      <div>
        <Navbar
          className="nav-bg"
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="nav-text-color" href="#home">
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  to="/home"
                  className="  text-decoration-none me-3 nav-text-color"
                  href="#features"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  className="text-decoration-none me-3 nav-text-color"
                  href="#features"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="#projects"
                  className="text-decoration-none me-3 nav-text-color"
                  href="#projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="aboutMe"
                  className="nav-text-color text-decoration-none me-3"
                  href="#pricing"
                >
                  About Me
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Navigation;