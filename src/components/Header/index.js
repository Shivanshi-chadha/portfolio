import React, { Component } from "react";
import "./index.css";
import { NAV_LINKS } from "../../constants";
import { Link } from "react-router-dom";

const BACKGROUND_COLOR = "rgb(36 45 70)";

class Header extends Component {
  state = {
    selectedTab: "Home",
    background: "transparent",
  };

  componentDidMount() {
    const path = window.location.pathname;
    const headerItem = NAV_LINKS.find((item) => item.route === path);
    if (path !== "/") {
      this.setState({
        background: BACKGROUND_COLOR,
        selectedTab: headerItem.title,
      });
    } else {
      this.setState({
        background: "transparent",
        selectedTab: headerItem.title,
      });
    }
  }

  changeTab = (item) => {
    if (item.title !== "Home") {
      this.setState({
        background: BACKGROUND_COLOR,
        selectedTab: item.title,
      });
    } else {
      this.setState({
        background: "transparent",
        selectedTab: item.title,
      });
    }
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <div
        className="navbar-container flex"
        style={{ background: this.state.background }}
      >
        <div className="flex pointer">
          <span className="logo-text">I</span>
          <span className="logo-sub-text">AM</span>
        </div>
        <div className="flex">
          {NAV_LINKS.map((item) => {
            return (
              <Link
                key={item.title}
                to={item.route}
                onClick={() => this.changeTab(item)}
                className={`header-item ${
                  selectedTab === item.title && "active"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
