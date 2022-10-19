import Alabaster from ".././Assets/imgs/PAINTING.jpg";
import Dali from ".././Assets/imgs/dali.jpeg";
import SCULPTOR from ".././Assets/imgs/SCUPLTOR.jpg";
import Banners from ".././Assets/imgs/banner3.png";
import logo from ".././Assets/icons/logow.png";

import React, { Component } from "react";
import "../App.css";

export default class VisitMuseum extends Component {
  render() {
    return (
      <div className="bgdark py-5 mb-5">
        <div
          className="container"
          style={{
            backgroundImage: `url(${Banners})`,
            maxHeight: 450,
            alignContent: "center",
            justifyContent: "center",
            justifySelf: "center",
            alignSelf: "center",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div className="container-fluid py-5">
            <div className="py-5 ">
              <h2>Visit the museum as you have never done before</h2>
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  justifySelf: "center",
                  alignContent: "center",
                  alignSelf: "center",
                }}
                className="row "
              ></div>
            </div>
            <button className="btn px-md-5  align-items-center align-content-center align-self-center whiteborderbtn mt-5 ">
              START VIRTUAL TOUR
            </button>
          </div>
        </div>
      </div>
    );
  }
}
