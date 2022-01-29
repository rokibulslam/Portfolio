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
      <div className="skills-banner py-5 pt-0">
        <h1 className="text-center pt-5 text-color">My Skills</h1>
        <div className="container p-3">
          <div className="row g-5">
            <div
              data-aos="fade-up"
              className="tools-icon col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={html} alt="" />
                <p className="mb-0">HTML</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={css} alt="" />
                <p className="mb-0">CSS</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={bootstrap} alt="" />
                <p className="mb-0">Bootstrap</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={javascript} alt="" />
                <p className="mb-0">Javascript</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={react} alt="" />
                <p className="mb-0">React</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={node} alt="" />
                <p className="mb-0">Node JS</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={express} alt="" />
                <p className="mb-0">Express js</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={mongo} alt="" />
                <p className="mb-0">Mongodb</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={firebase} alt="" />
                <p className="mb-0">Firebase</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={vs} alt="" />
                <p className="mb-0">VS Code</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={github} alt="" />
                <p className="mb-0">Github</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="tools-icon col-sm-6 col-md-3 d-flex flex-column justify-content-lg-center  align-items-center"
            >
              <div className="skill-bg p-3 d-flex flex-column align-items-center">
                <img height="60px" width="60px" src={mui} alt="" />
                <p className="mb-0">Material UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MySkill;