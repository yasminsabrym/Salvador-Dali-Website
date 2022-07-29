import logo from ".././Assets/icons/logow.png";
import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          {/* <div className="container"> */}
          {/* collapse start */}
          <a className="navbar-brand" href="#" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* collapse end */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-0 ms-md-5">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <img src={logo} style={{ height: 50, width: 120 }} />
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active mt-md-3 ms-md-4 ms-0 mt-0"
                  aria-current="page"
                  href="#"
                >
                  Museums
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mt-md-3 ms-md-4 ms-0 mt-0" href="#">
                  Visit{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mt-md-3 ms-md-4 ms-0 mt-0" href="#">
                  Exhibitions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mt-md-3 ms-md-4 ms-0 mt-0" href="#">
                  The Collection{" "}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mt-md-3 ms-md-4 ms-0 mt-0 dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      How Do I Use AmzDeals?
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      How long does it take to verify my Account?{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className=" ms-md-0 ms-0 mt-md-2 mt-0">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ width: 15, color: "white" }}
                />
              </li>

              <button className="btn signin ms-md-5">Buy Tickets</button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
