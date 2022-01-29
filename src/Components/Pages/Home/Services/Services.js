import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";


const Services = () => {

    return (
      <div className="services-bg">
        <div className="container p-5">
          <h1 className="text-white text-center text-start pt-5">SERVICES</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4 text-white">
              <div data-aos="fade-up" className="service-card m-3">
                <FontAwesomeIcon
                  className="bg-danger rounded p-2"
                  icon={faCode}
                  size="3x"
                />
                <h2 className="pt-3">Web Design</h2>
                <p>
                  Need a website for your personal use or business ? Just
                  contact me to build any kind of website. Hope u will get the
                  best service.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-white">
              <div data-aos="fade-up" className="service-card m-3">
                <FontAwesomeIcon
                  className="bg-danger rounded p-2"
                  icon={faCode}
                  size="3x"
                />
                <h2 className="pt-3">Web Development</h2>
                <p>
                  Make your static website to dynamic .I can develop your
                  website and can add interractive functionality . Hope u will
                  get the best service.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-white">
              <div data-aos="fade-up" className="service-card m-3">
                <FontAwesomeIcon
                  className="bg-danger rounded p-2"
                  icon={faCode}
                  size="3x"
                />
                <h2 className="pt-3">Bug Fixing</h2>
                <p>
                  I will fix annoying problem in React, Node-mongo-crud also
                  HTML , CSS, and Javascript issues. Contact me and Hope u will
                  get the best service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;