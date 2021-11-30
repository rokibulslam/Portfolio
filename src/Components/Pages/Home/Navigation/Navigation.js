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
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/home" className=" text-white text-decoration-none me-3" href="#features">
                  Home
                </NavLink>
                <NavLink to="/blog" className="text-white text-decoration-none me-3" href="#features">
                  Blog
                </NavLink>
                <NavLink to="#projects" className="text-white text-decoration-none me-3" href="#projects">
                  Projects
                </NavLink>
                <NavLink to="aboutMe" className="text-white text-decoration-none me-3" href="#pricing">
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