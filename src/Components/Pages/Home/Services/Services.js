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
          <div className="row">
            <div className="col-md-4 text-white service-card">
              <FontAwesomeIcon className='bg-danger rounded p-2' icon={faCode} size='3x'/>
              <h1>Web Design</h1>
              <p>
                Need a website for your personal use or business ? Just contact
                me to build any kind of website. Hope u will get the best
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;