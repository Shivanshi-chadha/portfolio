import React, { Component } from "react";
import "./index.css";
import ProfilePic from "../../assests/0.jpg";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="flex">
          <img className="im" src={ProfilePic} alt="Profile pic" />
          <div className="left">
            <p className="description">
              <span className="bold">Name:</span> Shivanshi Chadha
            </p>
            <p className="description">
              <span className="bold">Profile:</span> Full Stack Web Developer
            </p>
            <p className="description">
              <span className="bold">Email:</span> shivanshichadha5@gmail.com
            </p>
            <p className="description">
              <span className="bold">Phone No:</span> 8360878069
            </p>
          </div>
          <div className="right">
            <span className="about-me">About Me</span>
            <div className="horizontal-line"></div>
            <div className="summary">
              Eager to learn more about the new technologies. Creative mind who
              can solve problem in better and effective manner. Being a Full
              Stack Web Developer, I have ability to create innovative, creative
              and interactive web pages.
            </div>
          </div>
        </div>
        <div className="skill">
          <p>
            <span className="bold">HTML</span>
          </p>
          <div className="con">
            <div className="skills html">90%</div>
          </div>

          <p>
            <span className="bold">CSS</span>
          </p>
          <div className="con">
            <div className="skills css">80%</div>
          </div>

          <p>
            <span className="bold">JavaScript</span>
          </p>
          <div className="con">
            <div className="skills js">65%</div>
          </div>

          <p>
            <span className="bold">PHP</span>
          </p>
          <div className="con">
            <div className="skills php">60%</div>
          </div>
        </div>
        <div className="button-container">
          <a
            target="parent"
            href="https://drive.google.com/file/d/1k_BDx1uchPLG5hDDaojOC0u4Ujr_Di36/view?usp=sharing"
            className="resume-button"
          >
            &#8681; Resume
          </a>
        </div>
      </div>
    );
  }
}
export default About;
