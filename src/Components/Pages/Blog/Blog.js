import React from 'react';
import Typewriter from "typewriter-effect";


const Blog = () => {
    return (
      <div className="intro-banner py-5 text-center d-flex justify-content-center align-items-center flex-column">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="">
                <Typewriter
                  options={{
                    strings: ["BLOG COMMING SOON"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;