import logo from ".././Assets/icons/logo.svg";
import burger from ".././Assets/icons/burger.svg";
import exit from ".././Assets/icons/exit.svg";

import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }
  burgerToggle = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    // console.log(this.state.isClicked);
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bgdark ">
          {/* collapse start */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              style={{ height: 50, width: 120, marginInlineStart: 20 }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              onClick={this.burgerToggle}
              src={this.state.isClicked ? exit : burger}
              className="navbar-toggler-icon"
              style={{
                height: 25,
                width: 25,
                marginInlineStart: 20,
              }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* collapse end */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center ms-md-5">
              <li className="nav-item">
                <a
                  className="nav-link active mt-md-3 ms-md-4 text-center pt-0  mt-0"
                  aria-current="page"
                  href="#"
                >
                  Museums
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mt-md-3 ms-md-4 text-center pt-0  mt-0"
                  href="#"
                >
                  Visit{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mt-md-3 ms-md-4 text-center pt-0  mt-0"
                  href="#"
                >
                  Exhibitions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mt-md-3 ms-md-4 text-center pt-0  mt-0"
                  href="#"
                >
                  The Collection{" "}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mt-md-3 ms-md-4 text-center pt-0  mt-0 dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul
                  className="dropdown-menu   "
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className=" whitecol dropdown-item text-center text-md-start"
                      href="#"
                    >
                      How Do I Use This site?
                    </a>
                  </li>
                  <li>
                    <a
                      className="whitecol dropdown-item text-center text-md-start"
                      href="#"
                    >
                      How long does it take to book my ticket?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className=" ms-md-0 text-center pb-3 pb-md-0  mt-md-2 mt-0">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ width: 15, color: "white" }}
                />
              </li>

              <button className="btn signin ms-md-5 ">Buy Tickets</button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
