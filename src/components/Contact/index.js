import React, { Component } from "react";
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="left-container">
          <div className="head">Send Message Here</div>
          <div className="line"></div>
          <div className="contact-form">
            <input type="text" placeholder="Enter Name..."></input>
            <br></br>
            <input type="text" placeholder="Enter Email..."></input>
            <br></br>
            <input type="text" placeholder="Enter Subject..."></input>
            <br></br>
            <textarea
              rows="2"
              cols="22"
              placeholder="Some Message here... "
            ></textarea>
            <br></br>
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="right-container">
          <div className="subhead">Get in Touch</div>
          <div className="line"></div>
          <p className="contact-form-desc">
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </p>
          <div className="flex">
            <a
              target="parent"
              href="https://www.linkedin.com/in/shivanshi-chadha-57567314b/"
              className="social-media-handles"
            >
              Linkedin
            </a>
            <a
              target="parent"
              href="https://github.com/Shivanshi-chadha"
              className="social-media-handles"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
