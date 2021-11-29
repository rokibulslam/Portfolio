import React from 'react';
import './MySkill.css'


const MySkill = () => {
    return (
      <div className="mt-5">
        <div className="container ">
          <div className="row justify-content-evenly">
            <div class="skill-container col-md-6">
              <ul>
                <li class="html">HTML</li>
                <li class="css">CSS</li>
                <li class="js">JS</li>
              </ul>
            </div>
            <div class="skill-container col-md-6">
              <ul>
                <li class="html">HTML</li>
                <li class="css">CSS</li>
                <li class="js">JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MySkill;