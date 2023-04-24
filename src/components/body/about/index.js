import React from "react";
import "./about.css";
import lanamckay from "../../../assets/icons/lanamckay.png"
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, nice to meet you 👋
         <br /> <span className="info-name">I'm Lana</span>.
         <br /> Developer and Product Manager
        </div>
        <div className="about-photo">
          <img 
            src={lanamckay}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;