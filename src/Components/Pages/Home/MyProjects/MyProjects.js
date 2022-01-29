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
      <div id="projects" className="px-5 pb-5 project-bg">
        <h1 className="py-5 text-white text-center ">MY Projects</h1>
        <Row xs={1} md={3} className="g-5 pb-5">
          {projects?.map((pt) => (
            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={pt._id}
            >
              <Card className="d-flex flex-column h-100 card-hover">
                <Card.Img
                  height="400px"
                  className="card-img"
                  variant="top"
                  src={pt.pic1}
                />
                <div className="image-overlay">
                  <div className="text-white fw-bold">
                    <h1>{pt.name}</h1>
                  </div>
                  <h4>MERN Stack Project</h4>
                  <div className="card-text">
                    <NavLink to={`/home/projectDetails/${pt._id}`}>
                      <button className="card-button">Details</button>
                    </NavLink>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default MyProjects;