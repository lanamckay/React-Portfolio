import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          <i class=""></i>Projects
        </a>
    </div>
  <div className="web-option">
        <a href="#work">
        <i class=""></i>Experience
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        <i class=""></i>Skills
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i class=""></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;
