import React, { useEffect, useState } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './MyProject.css'



const MyProjects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  },[])
    return (
      <div id="projects" className="px-5 pb-5 text-center project-bg">
        <h1 className="py-5 text-center ">MY Projects</h1>
        <Row xs={1} md={3} className="g-5 pb-5">
          {projects?.map((pt) => (
           
            <Col key={pt._id}>
              
              <Card>
                <Card.Img className="img-hover" variant="top" src="" />
                <Card.Body className="card-text">
                  <Card.Title>CAR HOUSE</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>About This Project</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
                <div className="d-flex pb-3 card-text">
                  <NavLink to={`/home/projectDetails/${pt._id}`}>
                    <button className="card-button">Details</button>
                  </NavLink>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default MyProjects;