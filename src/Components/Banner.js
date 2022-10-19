import Banners from ".././Assets/imgs/newbg.png";
import logo from ".././Assets/icons/logow.png";

import React, { Component } from "react";
import "../App.css";

export default class Banner extends Component {
  render() {
    return (
      <div
        className="container-fluid pt-5 pb-4 jumbotron-fluid bg-dark "
        style={{
          backgroundImage: `url(${Banners})`,
          backgroundPosition: "center",
          backgroundSize: "cover",

          color: "white",
          textAlign: "center",
          height: "100%",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-md-4  pt-5 mt-3 col-12">
            <h1 style={{ fontSize: "430%" }}>SALVADOR DALI THEATRE-MUSEUM</h1>
            <div className="row justify-content-center">
              <h6 className=" col-md-7 col-9 text-center text-white quote mt-4 p-2">
                "It is not me who is the clown, but the monstrously cynical and
                so unconsciously naive society, which plays the game of
                seriousness in order better to hide its madness."
              </h6>
            </div>
            <img src={logo} style={{ height: 50, width: 120 }} />
          </div>
        </div>
      </div>
    );
  }
}
