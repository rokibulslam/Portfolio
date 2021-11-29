import React from 'react';
import './MySkill.css'


const MySkill = () => {
    return (
      <div className="skills-banner py-5">
        <h1 className="text-center">MY SKILLS</h1>
        <div className="container ">
          <div className="row justify-content-evenly">
            <div class="skill-container col-md-6">
              <ul>
                <li className="html">HTML</li>
                <li className="css">CSS</li>
                <li className="js">JS</li>
              </ul>
            </div>
            <div class="skill-container col-md-6">
              <ul>
                <li className="html">HTML</li>
                <li className="css">CSS</li>
                <li className="js">JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MySkill;