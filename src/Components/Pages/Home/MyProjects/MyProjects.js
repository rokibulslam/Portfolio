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
            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            
              key={pt._id}>
              <Card className="d-flex flex-column justify-content-end align-content-center h-100 w-100">
                <Card.Img className="img-fluid" variant="top" src={pt.pic1} />
                <Card.Body className="card-text d-flex flex-column justify-content-end align-content-center">
                  <Card.Title>CAR HOUSE</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>About This Project</Accordion.Header>
                      <Accordion.Body className="text-start">
                        {pt.dis1}
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