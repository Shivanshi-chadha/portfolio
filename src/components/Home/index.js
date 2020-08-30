import React, { Component } from "react";
import ProfilePic from "../../assests/Formal.jpg";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <img className="image" src={ProfilePic} alt="Profile pic" />
        <div className="image-text-container">
          <span className="heading">I am Shivanshi Chadha</span>
          <br />
          <span className="sub-title">Web Developer</span>
        </div>
      </div>
    );
  }
}

export default Home;
