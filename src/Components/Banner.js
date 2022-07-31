import Banners from ".././Assets/imgs/banner.png";
import logo from ".././Assets/icons/logow.png";

import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class Banner extends Component {
  render() {
    return (
      <div
        className="jumbotron-fluid"
        style={{
          backgroundImage: `url(${Banners})`,
          height: "100%",
          alignContent: "center",
          justifyContent: "center",
          justifySelf: "center",
          alignSelf: "center",
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <div style={{ paddingTop: "3.6%", paddingBottom: "3.6%" }}>
            <h1 style={{ fontSize: 90 }}>
              SALVADOR DALI <br />
              THEATRE-MUSEUM
            </h1>
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                justifySelf: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
              className="row "
            >
              <h6
                style={{
                  textAlign: "center",
                  justifySelf: "center",

                  alignSelf: "center",
                }}
                className=" col-md-3 col-6 text-center bg-black p-1"
              >
                "It is not me who is the clown, but the monstrously cynical and
                so unconsciously naive society, which plays the game of
                seriousness in order better to hide its madness."
              </h6>
            </div>
            <img src={logo} style={{ height: 50, width: 120 }} />
          </div>
          {/* <img src={Banners} style={{ width: "60%" }} /> */}
        </div>
      </div>
    );
  }
}
