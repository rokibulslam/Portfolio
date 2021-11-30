import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import CarHouse from '../../../../images/porjectPic/CarHouse.png'
import PacificMedical from "../../../../images/porjectPic/PacificMadical.png";
import OnlineCampus from "../../../../images/porjectPic/OnlineCampus.png";
import TripAdvisor from "../../../../images/porjectPic/TripAdvisor.png";
import './MyProject.css'

const MyProjects = () => {
    return (
      <div className="p-5 text-center project-bg">
        <h1 className="text-center mb-5">MY Projects</h1>
        <Row xs={1} md={2} className="g-5">
          <Col>
            <Card>
              <Card.Img className="img-hover" variant="top" src={CarHouse} />
              <Card.Body className="card-text">
                <Card.Title>CAR HOUSE</Card.Title>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About This Project</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <div className="d-flex pb-3 card-text">
                <button className="card-button">Live Preview</button>
                <button className="card-button">Client Code</button>
                <button className="card-button">Server Code</button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={TripAdvisor} />
              <Card.Body className="card-text">
                <Card.Title>TRIP ADVISOR</Card.Title>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About This Project</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <div className="d-flex pb-3 card-text">
                <button className="card-button">Live Preview</button>
                <button className="card-button">Client Code</button>
                <button className="card-button">Server Code</button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={PacificMedical} />
              <Card.Body className="card-text">
                <Card.Title>PACIFIC MEDICAL CENTER</Card.Title>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About This Project</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <div className="d-flex pb-3 card-text">
                <button className="card-button">Live Preview</button>
                <button className="card-button">Client Code</button>
                <button className="card-button">Server Code</button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={OnlineCampus}
              />
              <Card.Body className="card-text">
                <Card.Title>ONLINE CAMPUS</Card.Title>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About This Project</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <div className="d-flex pb-3 card-text">
                <button className="card-button">Live Preview</button>
                <button className="card-button">Client Code</button>
                <button className="card-button">Server Code</button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default MyProjects;