import React from 'react';
import './MySkill.css'
import firebase from '../../../../images/Icon/firebase.svg'
import bootstrap from "../../../../images/Icon/bootstrap.png";
import css from "../../../../images/Icon/css.png";
import express from "../../../../images/Icon/expressjs.png";
import github from "../../../../images/Icon/github.png";
import html from "../../../../images/Icon/html.svg";
import javascript from "../../../../images/Icon/javascript.png";
import linux from "../../../../images/Icon/linux.ico";
import mongo from "../../../../images/Icon/mongodb.svg";
import mui from "../../../../images/Icon/mui.png";
import node from "../../../../images/Icon/nodejs.png";
import react from "../../../../images/Icon/react.png";
import vs from "../../../../images/Icon/vscodecolor.png";


const MySkill = () => {
    return (
      <div className="skills-banner">
        <h1 className="text-center pt-5 text-color">My Skills</h1>
        <div className="container p-5">
          <div className="row g-5">
            <div
              data-aos="fade-up"
              className="tools-icon col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={html} alt="" />
              <p>HTML</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="80px" src={css} alt="" />
              <p>CSS</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={bootstrap} alt="" />
              <p>BootStrap</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={javascript} alt="" />
              <p>Javascript</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={react} alt="" />
              <p>React</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={node} alt="" />
              <p>NodeJs</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={express} alt="" />
              <p>Express js</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={mongo} alt="" />
              <p>Mogodb</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={firebase} alt="" />
              <p>Firebase</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={vs} alt="" />
              <p>vs</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={github} alt="" />
              <p>Github</p>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-2 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <img height="70px" width="100px" src={mui} alt="" />
              <p>Material UI</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MySkill;